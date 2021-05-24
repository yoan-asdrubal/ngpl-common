import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkeletonTestComponent} from './app-test/skeleton-test/skeleton-test.component';

const routes: Routes = [
  {
    path: 'skeleton',
    component: SkeletonTestComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
