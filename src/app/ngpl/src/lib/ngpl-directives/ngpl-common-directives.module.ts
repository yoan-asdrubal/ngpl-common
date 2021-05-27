import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgplControlErrorComponent} from './ngpl-form-error/ngpl-control-error/ngpl-control-error.component';
import {NGPL_FORM_ERRORS} from './ngpl-form-error/ngpl-form-errors';


@NgModule({
  declarations: [],
  exports: [],
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
