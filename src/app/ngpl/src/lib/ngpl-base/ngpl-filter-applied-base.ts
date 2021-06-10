import {NgplFilterConfigDirective} from '../ngpl-filter/ngpl-filter-config.directive';

export interface NgplFilterAppliedBase {
  registerFilter: (filterConfig: NgplFilterConfigDirective) => void;
}
