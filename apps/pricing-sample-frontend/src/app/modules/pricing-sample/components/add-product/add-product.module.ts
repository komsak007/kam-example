import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddProductComponent],
  imports: [
    FormsModule,
    CommonModule
  ], exports: [AddProductComponent]
})
export class AddProductModule { }
 