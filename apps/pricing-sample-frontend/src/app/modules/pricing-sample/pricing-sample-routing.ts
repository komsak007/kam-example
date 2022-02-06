import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingSampleComponent } from './pricing-sample.component';

const routes: Routes = [
  {
    path: '',
    component: PricingSampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PricingSampleRoutingModule {}
