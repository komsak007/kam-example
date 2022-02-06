import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing';
import { LayoutOneModule } from './components/layout-one/layout-one.module';
import { LayoutThreeModule } from './components/layout-three/layout-three.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    LayoutOneModule,
    LayoutThreeModule,
  ],
})
export class LayoutModule {}
