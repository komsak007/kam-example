import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutOneComponent } from './components/layout-one/layout-one.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'layout-2',
        loadChildren: () =>
          import('./components/layout-two/layout-two.module').then(
            (m) => m.LayoutTwoModule
          ),
      },
      {
        path: 'pricing-child',
        loadChildren: () =>
          import('../../modules/pricing-sample/pricing-sample.module').then(
            (m) => m.PricingSampleModule
          ),
      },
    ],
  },
  {
    path: 'layout-1',
    component: LayoutOneComponent,
    children: [],
  },
  {
    path: 'pricing',
    loadChildren: () =>
      import('../../modules/pricing-sample/pricing-sample.module').then(
        (m) => m.PricingSampleModule
      ),
  },
  {
    path: 'todo',
    loadChildren: () =>
      import('../../modules/todo/todo.module').then((m) => m.TodoModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
