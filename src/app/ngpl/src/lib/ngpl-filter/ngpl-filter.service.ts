import {Injectable} from '@angular/core';
import {FilterConfigType, NgplFilterConfigValue} from './ngpl-filter-config.directive';

@Injectable({
  providedIn: 'root'
})
export class NgplFilterService {

  constructor() { }
  /**
   * Filtra sobre un conjunto de elementos aplicando varios filtros
   * Los filtros se especifican en un mapa de datos , el campo key es solo para identificarlo dentro del mapa, no se utiliza en el filtro
   * Para cada filtro se debe definir el campo filter, con el valor a filtrar , y el campo keys
   * con las columnas a las que se desea aplicar ese filtro.
   * Los keys pueden especificar el path hacia la propiedad que se desea tener en cuenta, permitiendo filtrar por
   * propiedades existentes en los hijos
   * Ejemplos de filtros
   * @example
   * {
   *     filtro_by_nombre:{
   *         filter:'FONS',
   *         keys:['nombre']
   *     }
   * }
   * @example
   * {
   *     filtro_by_address:{
   *         filter:'Obispo',
   *         keys:['direccion.calle']
   *     }
   * }
   *
   * @example
   * {
   *     filtro_by_nombre_apellidos:{
   *         filter:'FONS',
   *         keys:['nombre', 'apellido']
   *     },
   *     filter_by_direccion:{
   *         filter:'CUB',
   *         keys:['direccion.calle']
   *     }
   * }
   *
   * @param items Elementos
   * @param filters Filtros a aplicar
   */
  filter(items: any[], filters: { [key: string]: NgplFilterConfigValue | any }): any[] {
    if (!items || !Array.isArray(items)) {
      return [];
    }
    if (!filters) {
      return items;
    }
    // console.log('items', items);
    // console.log('filters', filters);

    const filterValues = Object.values(filters);
    const predicate = (item: any) => {
      return filterValues.filter((filter: NgplFilterConfigValue) => {

        if (!!filter.skipFilter
          || (typeof filter.value !== 'boolean' && filter.value !== 0 && !filter.value)
          || filter.value.toString().trim().length === 0) {
          return true;
        }

        if (!!filter.filterFn) {
          return filter.filterFn(item, filter.value);
        }

        /**
         * Agrega manejo de tipo de filtro por Periodo
         */
        if (Array.isArray(filter.value)) {
          return this.filterMultiValues(item, filter);
        }

        /**
         * Agrega manejo de tipo de filtro EQUAL
         */
        if (filter.type === FilterConfigType.LESS) {
          return this.filterLessValue(item, filter);
        }
        /**
         * Agrega manejo de tipo de filtro EQUAL
         */
        if (filter.type === FilterConfigType.GREATER) {
          return this.filterGreaterValue(item, filter);
        }
        /**
         * Agrega manejo de tipo de filtro EQUAL
         */
        if (filter.type === FilterConfigType.LESS_EQUAL) {
          return this.filterLessEqualThanValue(item, filter);
        }
        /**
         * Agrega manejo de tipo de filtro EQUAL
         */
        if (filter.type === FilterConfigType.GREATER_EQUAL) {
          return this.filterGreaterEqualThanValue(item, filter);
        }
        /**
         * Agrega manejo de tipo de filtro por Periodo
         */
        if (filter.type === FilterConfigType.EQUAL) {
          return this.filterEqualValue(item, filter);
        }

        /**
         * Agrega manejo de tipo de filtro por Periodo
         */
        if (filter.type === FilterConfigType.DATE_YEAR) {
          return this.filterDateFieldInsideYear(item, filter);
        }
        /**
         * Agrega manejo de tipo de filtro por Periodo
         */
        if (filter.type === FilterConfigType.PERIOD) {
          return this.filterByPeriodo(item, filter);
        }
        /**
         * Agrega manejo de tipo de filtro por de un campo fecha en un periodo
         */
        if (filter.type === FilterConfigType.DATE_PERIOD) {
          return this.filterDateFieldInsidePeriod(item, filter);
        }

        if (!filter.keys || filter.keys.length === 0) {
          if (!!filter.exact) {
            return item.toString().toLowerCase() === filter.value.toString().toLowerCase();
          }
          return item.toString().toLowerCase().indexOf(filter.value.toString().toLowerCase()) > -1;
        }

        if (!Array.isArray(filter.keys)) {
          // tslint:disable-next-line:no-unused-expression
          console.warn('El campo <keys> debe ser de tipo  <string[]>, es de tipo <' + (typeof filter.keys) + '> con valor <' + filter.keys + '>');
          return false;
        }

        if (filter.keys.length === 0) {
          return true;
        }
        const fullValue = filter.keys.map(k => {
          const prop = this.itemProperty(item, k);
          return typeof prop === 'boolean' ? prop : (prop || '');
        })
          .join('').toLowerCase();

        // console.log('item', item);
        // console.log('filter', filter);
        // console.log('fullValue', fullValue,typeof fullValue);

        if (typeof fullValue === 'number' || typeof fullValue === 'boolean' || !!fullValue) {
          const filterPice = filter.value.toString().toLowerCase().split('*');
          if (!!filter.exact) {
            return filterPice.filter(f => fullValue === f).length === filterPice.length;
          }
          return filterPice.filter(f => fullValue.indexOf(f) >= 0).length === filterPice.length;
        }
        return false;

      }).length === filterValues.length;

    };
    return items.filter(item => predicate(item));

  }


  /**
   * Filtro de valores multiples
   * @param item
   * @param filter
   */
  public filterMultiValues(item, filter: NgplFilterConfigValue): boolean {
    const keys = filter.keys;
    const values = filter.value;
    return keys.find(k => {
      const prop = this.itemProperty(item, k);
      return !!values.find(v => prop === v);
    });
  }

  /**
   * Aplica filtro por periodo, para ello en el objeto de configuracion del filtro debe ser especificado
   * los valores inicio y fin, con las propiedades del objeto a tener en cuenta para evaluar si un objeto se encuentra
   * en un periodo
   * config:{
   *     inicio: 'fechaInicioContrato',
   *     fin: 'fechaFinContrato'
   * }
   * @param item Objeto a evaluar
   * @param filter Configuracion del filtro para tomar el valor a comparar  y la configuracion de campos del periodo
   */
  filterByPeriodo(item: any, filter: NgplFilterConfigValue): any {
    const period = filter.value;
    const config: any = filter.config;

    const fechaFinPeriodo = new Date(period.anno, period.mes, 0, 23, 59, 59, 0).getTime();
    const fechaInicioPeriodo = new Date(period.anno, period.mes - 1, 0, 23, 59, 59, 0).getTime();

    const valInicio = this.itemProperty(item, config.inicio);
    const valFin = this.itemProperty(item, config.fin);
    return valInicio <= fechaFinPeriodo &&
      (valFin > fechaInicioPeriodo || !valFin);
  }

  filterDateFieldInsidePeriod(item: any, filter: NgplFilterConfigValue): any {
    const period = filter.value;

    const fechaFinPeriodo = new Date(period.anno, period.mes, 0, 23, 59, 59, 0).getTime();
    const fechaInicioPeriodo = new Date(period.anno, period.mes - 1, 0, 23, 59, 59, 0).getTime();

    const prop = this.itemProperty(item, filter.keys[0]);
    if (!!filter.exact) {
      return !!prop && (prop > fechaInicioPeriodo && prop < fechaFinPeriodo);
    }
    return !prop || (prop > fechaInicioPeriodo && prop < fechaFinPeriodo);
  }

  filterDateFieldInsideYear(item: any, filter: NgplFilterConfigValue): any {
    const period = filter.value;

    const fechaInicioPeriodo = new Date(period, 0, 0, 23, 59, 59, 0).getTime();
    const fechaFinPeriodo = new Date(period + 1, 0, 1).getTime();

    const prop = this.itemProperty(item, filter.keys[0]);
    if (!!filter.exact) {
      return !!prop && (prop > fechaInicioPeriodo && prop < fechaFinPeriodo);
    }
    return !prop || (prop > fechaInicioPeriodo && prop < fechaFinPeriodo);

  }

  /**
   * Implementa filtro para propiedades numericas con igual valor, permite incluir valores nulos en el resultado
   * @param item
   * @param filter
   * @private
   */

  private filterEqualValue(item: any, filter: NgplFilterConfigValue): any {
    const value = filter.value;
    const prop = this.itemProperty(item, filter.keys[0]);
    if (!!filter.exact) {
      return !!prop && (prop === value);
    }
    return !prop || (prop === value);

  }

  /**
   * Implementa filtro para propiedades numericas con igual valor, permite incluir valores nulos en el resultado
   * @param item
   * @param filter
   * @private
   */

  private filterGreaterValue(item: any, filter: NgplFilterConfigValue): any {
    const value = filter.value;
    const prop = this.itemProperty(item, filter.keys[0]);
    if (!!filter.exact) {
      return !!prop && (+prop > +value);
    }
    return !prop || (+prop > +value);

  }

  /**
   * Implementa filtro para propiedades numericas con igual valor, permite incluir valores nulos en el resultado
   * @param item
   * @param filter
   * @private
   */

  private filterGreaterEqualThanValue(item: any, filter: NgplFilterConfigValue): any {
    const value = filter.value;
    const prop = this.itemProperty(item, filter.keys[0]);
    if (!!filter.exact) {
      return !!prop && (+prop >= +value);
    }
    return !prop || (+prop >= +value);

  }

  /**
   * Implementa filtro para propiedades numericas con igual valor, permite incluir valores nulos en el resultado
   * @param item
   * @param filter
   * @private
   */

  private filterLessValue(item: any, filter: NgplFilterConfigValue): any {
    const value = filter.value;
    const prop = this.itemProperty(item, filter.keys[0]);
    if (!!filter.exact) {
      return !!prop && (+prop < +value);
    }
    return !prop || (+prop < +value);

  }

  /**
   * Implementa filtro para propiedades numericas con igual valor, permite incluir valores nulos en el resultado
   * @param item
   * @param filter
   * @private
   */

  private filterLessEqualThanValue(item: any, filter: NgplFilterConfigValue): any {
    const value = filter.value;
    const prop = this.itemProperty(item, filter.keys[0]);
    if (!!filter.exact) {
      return !!prop && (+prop <= +value);
    }
    return !prop || (+prop <= +value);

  }

  /**
   * Devuelve la propiedad especificada para el objeto de los parametros,
   * la propiedad puede ser de objetos anidados
   * propiedad: 'id' > directamente pertenece al objeto
   * propiedad: 'contrato.zona.descripcion' > propiedad anidada en objetos, devolvera el valor de la propiedad 'descripcion'
   *
   * Devuelve null en caso de no existir o no estar definida la propiedad deseada
   *
   * @param item
   * @param key
   */
  itemProperty(item, key): any {
    return key.split('.')
      .reduce((result, _field) => {
        if (typeof result === 'number' || typeof result === 'boolean') {
          return result;
        }
        if (!result) {
          return null;
        }
        if (!result.hasOwnProperty(_field)) {
          return null;
        }
        const fieldValue = result[_field];

        if (fieldValue === null || fieldValue === undefined) {
          return null;
        }
        return fieldValue;
      }, item);
  }

}
