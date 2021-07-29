import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DfCommonLayoutComponent} from './df-common-layout/df-common-layout.component';
import {DfCommonLayoutDialogComponent} from './df-common-layout-dialog/df-common-layout-dialog.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [DfCommonLayoutComponent, DfCommonLayoutDialogComponent],
  exports: [DfCommonLayoutComponent, DfCommonLayoutDialogComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class DfCommonLayoutModule {
}
