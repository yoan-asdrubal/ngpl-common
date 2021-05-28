import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgplAutofocusDirective} from './ngpl-autofocus.directive';
import {NgplFilterPipe} from './ngpl-filter.pipe';
import {NgplFilterConfigDirective} from './ngpl-filter-config.directive';
import '../ngpl-interfaces/string.interface';
import '../ngpl-interfaces/object.interface';
const items = [
  NgplAutofocusDirective,
  NgplFilterPipe,
  NgplFilterConfigDirective
];

@NgModule({
  declarations: [items],
  exports: [items],
  imports: [
    CommonModule
  ]
})
export class NgplCommonFilterModule {
}
