import {NgplFilterConfigDirective} from '../../ngpl-filter/ngpl-filter-config.directive';
import {InjectionToken} from '@angular/core';

export interface NgplFilterAppliedBase {
  registerFilter: (filterConfig: NgplFilterConfigDirective) => void;
}

export const NGPL_FILTER_APPLIED_BASE = new InjectionToken<NgplFilterAppliedBase>('NgplFilterAppliedBase');
