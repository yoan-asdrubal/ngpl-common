import {NgModule} from '@angular/core';
import {NgplSkeletonComponent} from './ngpl-skeleton.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [NgplSkeletonComponent],
  imports: [
    CommonModule
  ],
  exports: [NgplSkeletonComponent]
})
export class NgplSkeletonModule {
}
