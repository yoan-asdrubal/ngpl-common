import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgplCommonSkeletonModule} from './ngpl-skeleton/ngpl-common-skeleton.module';
import {NgplCommonPipesModule} from './ngpl-pipes';
import {NgplCommonDirectivesModule} from './ngpl-directives';
import './ngpl-interfaces/string.interface';
import './ngpl-interfaces/object.interface';
// @ts-ignore

const modules = [
  NgplCommonSkeletonModule,
  NgplCommonDirectivesModule,
  NgplCommonPipesModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports: [modules]
})
export class NgplCommonModule {

}
