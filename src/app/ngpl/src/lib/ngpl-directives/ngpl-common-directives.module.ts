import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgplControlErrorComponent} from './ngpl-form-error/ngpl-control-error/ngpl-control-error.component';
import {NGPL_FORM_ERRORS} from './ngpl-form-error/ngpl-form-errors';
import {NgplDisableReactiveControlDirective} from './ngpl-disable-reactive-control.directive';
import {NgplMinWidthDirective} from './ngpl-min-width.directive';
import {NgplWidthDirective} from './ngpl-width.directive';
import {NgplFormSubmitDirective} from './ngpl-form-error/ngpl-form-submit.directive';
import {NgplControlErrorsDirective} from './ngpl-form-error/ngpl-control-errors.directive';
import {NgplControlErrorContainerDirective} from './ngpl-form-error/ngpl-control-error-container.directive';
import '../ngpl-interfaces/string.interface';
import '../ngpl-interfaces/object.interface';

const directives = [
  NgplDisableReactiveControlDirective,
  NgplMinWidthDirective,
  NgplWidthDirective,
  NgplFormSubmitDirective,
  NgplControlErrorsDirective,
  NgplControlErrorContainerDirective
];

@NgModule({
  declarations: [directives],
  exports: [directives],
  entryComponents: [NgplControlErrorComponent],
  imports: [
    CommonModule
  ]
})
export class NgplCommonDirectivesModule {

  constructor() {
    console.log('loaded', 'NgplCommonDirectivesModule');
  }

  static forRoot(defaultError: any): ModuleWithProviders<NgplCommonDirectivesModule> {
    return {
      ngModule: NgplCommonDirectivesModule,
      providers: [{provide: NGPL_FORM_ERRORS, useValue: defaultError}]
    };
  }
}
