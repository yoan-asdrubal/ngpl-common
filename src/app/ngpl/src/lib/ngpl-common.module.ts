import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgplCommonSkeletonModule} from './ngpl-skeleton/ngpl-common-skeleton.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  NgplControlErrorsDirective,
  NgplDisableReactiveControlDirective,
  NgplFormSubmitDirective,
  NgplMinWidthDirective,
  NgplWidthDirective
} from './ngpl-directives';
import {NgplFillPipe} from './ngpl-pipes';
// @ts-ignore

const modules = [
  NgplCommonSkeletonModule
];
const directives = [
  NgplDisableReactiveControlDirective,
  NgplMinWidthDirective,
  NgplWidthDirective,
  NgplFormSubmitDirective,
  NgplControlErrorsDirective
];

@NgModule({
  declarations: [directives],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    modules
  ],
  exports: [modules, directives]
})
export class NgplCommonModule {
  constructor() {
    console.log({'new NgplFillPipe().transform([], 25)': new NgplFillPipe().transform([], 25)});
  }
}
