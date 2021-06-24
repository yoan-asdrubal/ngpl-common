import {Directive, Inject, Input, OnDestroy, OnInit, Optional, Self} from '@angular/core';
import {debounceTime, distinctUntilChanged, map, startWith, takeUntil, tap} from 'rxjs/operators';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {NgControl} from '@angular/forms';
import {NGPL_FILTER_BASE, NgplFilterBase} from '../ngpl-base/injection-tokens/ngpl-filter-base';
import {NgplDatatableBase} from '../ngpl-base/injection-tokens/ngpl-datatable-base';
import {NGPL_FILTER_APPLIED_BASE, NgplFilterAppliedBase} from '../ngpl-base/injection-tokens/ngpl-filter-applied-base';
import {NGPL_FILTER_MENU_BASE, NgplFilterMenuBase} from '../ngpl-base/injection-tokens/ngpl-filter-menu-base';

export enum FilterConfigType {
  PERIOD = 'PERIODO',
  DATE_PERIOD = 'FECHA_EN_PERIODO',
  DATE_YEAR = 'FECHA_ANUAL',
  EQUAL = '==',
  GREATER = '>',
  GREATER_EQUAL = '>=',
  LESS = '<',
  LESS_EQUAL = '<='
}

export const filterComparatorsOptions = [
  {
    descripcion: 'Igual a',
    value: '=='
  }, {
    descripcion: 'Mayor a',
    value: '>'
  }, {
    descripcion: 'Mayor o igual a',
    value: '>='
  }, {
    descripcion: 'Menor a',
    value: '<'
  }, {
    descripcion: 'Menor o igual a',
    value: '<='
  }, {
    descripcion: 'Entre',
    value: '<>'
  }
];

export interface NgplFilterConfigValue {
  /** Nombre para identificar el filtro en los diferentes lugares donde se utilice, si no se especifica se
   * generar automaticamente a partir de las {@keys}
   */
  name: string;

  /** Propiedades del objeto en las que se aplicara el filtro,
   * permite array de propiedades anidadas separadas por puntos, o string separado por (,)
   * @example ['nombre','direccion.numero']
   * @example 'nombre,direccion.numero'
   */
  keys: any;

  /** Texto que se mostrara en el componente con los valores que se estan utilizando en el filtro */
  title?: string;

  /** Valor por el que se debe filtrar */
  value?: any;

  /** Define si se debe permitir o no valores nulos en el momento de aplicar el filtro */
  exact?: boolean;

  /** NgControl asociado al filtro para subscribirse a los cambios o limpiar el filtro */
  control?: NgControl;

  /** Tipo de filtro a aplicar, si no se especifica se aplica el filtro por defecto manejando los campos como string */
  type?: FilterConfigType;

  /**
   * Subtipo utilizado para identificar el tipo de valor a manejar en el componente de valores filtrados
   */
  subtype?: 'date' | 'number' | 'string';

  /**
   * Configuracion extra para filtros especificos como por periodos o fechas en el año
   */
  config?: any;

  /**
   * Referencia al objeto de la directiva para acceder  desde el widget de valores filtrados a las funcionalidades
   */
  parent?: NgplFilterConfigDirective;

  /**
   * Referencia al widget de filtrado para asociar filtros que queden fuera de este container
   */
  container?: NgplDatatableBase;

  /** Referencia al componente para mostrar los datos por los qeu se esta filtrando */
  filterApplied?: NgplFilterAppliedBase;

  /** Define la columna por la que se buscara la configuracion para exportar el valor filtrado, en caso de no definirse
   * se buscara la configuracion a partir del nombre
   */
  column?: string;

  /**
   *  Referencia al componente WidgetFilterOptionComponent en caso de estar utilizandose dentro de filtro de la columna
   */
  ngplFilterMenu?: NgplFilterMenuBase;

  /**
   * Define si se aplica o no el filtro, true para no aplicar el filtro, utilizado principalmente para
   * listados de datos por periodos donde se cargan desde el backend segun el periodo seleccionado
   */
  skipFilter?: boolean;

  /**
   * Define una funcion  para usar como predicado en el filtro aplicado a los elementos
   * @param item
   * @param filterValue
   */
  filterFn?: (item: any, filterValue: any) => boolean;
}

@Directive({
  selector: '[ngplFilterConfig]'
})
export class NgplFilterConfigDirective implements OnInit, OnDestroy {
  @Input() ngplFilterConfig: NgplFilterConfigValue;
  filter = new ReplaySubject<NgplFilterConfigValue>(1);

  destroyIt = new Subject();
  destroyIt$ = this.destroyIt.asObservable();

  constructor(@Optional() @Self() private controlDir: NgControl,
              @Optional() @Inject(NGPL_FILTER_BASE) private ngplFilterBase: NgplFilterBase,
              @Optional() @Inject(NGPL_FILTER_MENU_BASE) private ngplFilterMenu: NgplFilterMenuBase,
              @Optional() @Inject(NGPL_FILTER_APPLIED_BASE) private ngplFilterApplied: NgplFilterAppliedBase) {

  }

  ngOnInit(): void {
    // console.log('appFilterConfig', this.appFilterConfig);
    // console.log('this.widgetFilterMenu', this.widgetFilterMenu);
    const keys = this.ngplFilterConfig.keys;
    if (!keys && !this.ngplFilterConfig.skipFilter) {
      throw new Error(this.ngplFilterConfig.name + ' debe tener especificado los campos donde aplicara el filtro');
    }
    const name = this.ngplFilterConfig.name;
    if (!name) {
      throw new Error('Debe especificar el nombre del filtro para que sea identificado');
    }
    /**
     * Chequea DI para obtener observable a partir del widgetFilterBase o del formControl asociado a la directiva
     */

    if (!this.ngplFilterConfig.ngplFilterMenu) {
      this.ngplFilterConfig.ngplFilterMenu = this.ngplFilterMenu;
    }
    if (!this.ngplFilterConfig.filterApplied) {
      this.ngplFilterConfig.filterApplied = this.ngplFilterApplied;
    }

    let event: Observable<any> = null;
    if (!!this.controlDir) {
      event = this.controlDir.control.valueChanges;
    } else if (!!this.ngplFilterBase) {
      event = this.ngplFilterBase.valueChange;
    }

    if (!!event) {
      if (!!this.ngplFilterConfig.container) {
        this.ngplFilterConfig.container.registerFilter(this);
      }
      if (!!this.ngplFilterConfig.filterApplied) {
        this.ngplFilterConfig.filterApplied.registerFilter(this);
      }
      // console.log('', this.filterConfig, this.controlDir.control.value);

      event
        .pipe(
          takeUntil(this.destroyIt$),
          startWith((!!this.controlDir && this.controlDir.control.value) || this.ngplFilterConfig.value),
          map(value => typeof value === 'string' ? value.trim() : value),
          distinctUntilChanged(),
          debounceTime(300),
          tap(value => {
            this.ngplFilterConfig = {
              ...this.ngplFilterConfig, ...{
                value,
                parent: this,
                ngplFilterMenu: this.ngplFilterMenu || this.ngplFilterConfig.ngplFilterMenu,
                keys: typeof keys === 'string' ? keys.split(',') : keys
              }
            };
            this.filter.next(this.ngplFilterConfig);
          })
        )
        .subscribe();
    } else {
      this.ngplFilterConfig = {
        ...this.ngplFilterConfig, ...{
          keys: typeof keys === 'string' ? keys.split(',') : keys
        },
        parent: this,
        ngplFilterMenu: this.ngplFilterMenu || this.ngplFilterConfig.ngplFilterMenu
      };
      this.filter.next(this.ngplFilterConfig);
    }

  }

  ngOnDestroy(): void {
    this.destroyIt.next(this.ngplFilterConfig);
  }

  clearFilter(): void {
    // console.log('clearFilter', this.appFilterConfig, this.controlDir?.control?.value);

    if (!!this.controlDir) {
      this.controlDir.control.setValue(null);
    } else if (!!this.ngplFilterBase) {
      this.ngplFilterBase.clearValue();
    }
  }

  updateValue(value: any): void {
    // console.log('updateValue', this.appFilterConfig, value);
    // if (!!this.controlDir) {
    //     this.controlDir.control.setValue(value);
    // } else
    if (!!this.ngplFilterBase) {
      this.ngplFilterBase.newValue(value);
    }
  }
}
