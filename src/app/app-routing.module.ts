import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkeletonTestComponent} from './app-test/skeleton-test/skeleton-test.component';
import {NgplSelectTestComponent} from './app-test/ngpl-select-test/ngpl-select-test.component';

const routes: Routes = [
  {
    path: 'skeleton',
    component: SkeletonTestComponent
  }, {
    path: 'ngpl-select',
    component: NgplSelectTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
