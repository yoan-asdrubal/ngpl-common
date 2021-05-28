import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgplCommonSkeletonModule} from './ngpl-skeleton/ngpl-common-skeleton.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgplCommonPipesModule} from './ngpl-pipes';
import {NgplCommonDirectivesModule} from './ngpl-directives';
import {NgplCommonFilterModule} from './ngpl-filter';
import './ngpl-interfaces/string.interface';
import './ngpl-interfaces/object.interface';
// @ts-ignore

const modules = [
  NgplCommonSkeletonModule,
  NgplCommonDirectivesModule,
  NgplCommonPipesModule,
  NgplCommonFilterModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    modules
  ],
  exports: [modules]
})
export class NgplCommonModule {

}
