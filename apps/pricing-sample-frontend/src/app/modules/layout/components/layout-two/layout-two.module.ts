import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutTwoComponent } from './layout-two.component';
import { LayoutTwoRoutingModule } from './layout-two-routing';

@NgModule({
  declarations: [LayoutTwoComponent],
  imports: [CommonModule, LayoutTwoRoutingModule],
})
export class LayoutTwoModule {}
