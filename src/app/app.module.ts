import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import localeEs from '@angular/common/locales/es-CL';
import {registerLocaleData} from '@angular/common';
import {OverlayContainer} from '@angular/cdk/overlay';
import {CustomOverlayContainer} from './custom-overlay-container';
import {MatIconModule} from '@angular/material/icon';
import {SideNavComponent} from './side-nav/side-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {SkeletonTestComponent} from './app-test/skeleton-test/skeleton-test.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgplSelectTestComponent} from './app-test/ngpl-select-test/ngpl-select-test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgplCommonModule} from './ngpl/src/lib/ngpl-common.module';

registerLocaleData(localeEs);

const materialModules = [
  FlexLayoutModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTooltipModule,
  MatCheckboxModule
];

const ngplCommonModules = [
  NgplCommonModule
];
 

@NgModule({
  declarations: [
    AppComponent,
    SkeletonTestComponent,
    NgplSelectTestComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    materialModules,
    NgplCommonModule
  ],
  exports: [ngplCommonModules],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-cl'
  },
    {provide: OverlayContainer, useClass: CustomOverlayContainer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
