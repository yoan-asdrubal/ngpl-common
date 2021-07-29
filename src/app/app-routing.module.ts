import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkeletonTestComponent} from './app-test/skeleton-test/skeleton-test.component';
import {NgplSelectionTestComponent} from './app-test/ngpl-select-test/ngpl-selection-test.component';
import {NgplDirectivesTestComponent} from './app-test/ngpl-directives-test/ngpl-directives-test.component';

const routes: Routes = [
  {
    path: 'skeleton',
    component: SkeletonTestComponent,
    data: {
      title: 'Skeleton Test'
    }
  }, {
    path: 'ngpl-directives',
    component: NgplDirectivesTestComponent,
    data: {
      title: 'Directives Test'
    }
  }, {
    path: 'ngpl-selection',
    component: NgplSelectionTestComponent,
    data: {
      title: 'Selection Test'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
