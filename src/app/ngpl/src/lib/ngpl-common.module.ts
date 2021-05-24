import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgplSkeletonModule} from './ngpl-skeleton/ngpl-skeleton.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// @ts-ignore

const modules = [
  NgplSkeletonModule
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
