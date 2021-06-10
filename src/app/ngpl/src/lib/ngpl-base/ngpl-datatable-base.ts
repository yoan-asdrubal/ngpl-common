import {NgplFilterConfigDirective} from '../ngpl-filter/ngpl-filter-config.directive';

export interface NgplDatatableBase {
  registerFilter: (filterConfig: NgplFilterConfigDirective) => void;
}
