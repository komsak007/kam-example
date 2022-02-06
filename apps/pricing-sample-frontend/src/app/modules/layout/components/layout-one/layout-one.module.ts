import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutOneComponent } from './layout-one.component';
import { LayoutThreeModule } from '../layout-three/layout-three.module';

@NgModule({
  declarations: [LayoutOneComponent],
  imports: [CommonModule, LayoutThreeModule],
})
export class LayoutOneModule {}
