import {EventEmitter, InjectionToken} from '@angular/core';

export interface NgplFilterBase {
  valueChange: EventEmitter<any>;

  clearValue: () => void;

  newValue: (value: any) => void;

}

export const NGPL_FILTER_BASE = new InjectionToken<NgplFilterBase>('NgplFilterBase');

