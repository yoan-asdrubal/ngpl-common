import {Pipe, PipeTransform} from '@angular/core';
import {NgplFilterConfigValue} from './ngpl-filter-config.directive';
import {NgplFilterService} from './ngpl-filter.service';

/**
 * Permite filtrar sobre un arreglo de elementos, varios filtros al mismo tiempo sobre varias propiedades
 */
@Pipe({
  name: 'ngplFilter'
})
export class NgplFilterPipe implements PipeTransform {

  constructor(private ngplFilter: NgplFilterService) {
  }

  transform(items: any[], filters: { [key: string]: NgplFilterConfigValue | any }): any[] {
    return this.ngplFilter.filter(items, filters);
  }
}
