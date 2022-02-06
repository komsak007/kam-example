import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutTwoComponent } from './layout-two.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutTwoComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutTwoRoutingModule {}
