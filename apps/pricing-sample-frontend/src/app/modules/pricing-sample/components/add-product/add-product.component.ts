import { Component, OnInit } from '@angular/core';
import { ProductService } from 'apps/pricing-sample-frontend/src/app/services/product.service';

@Component({
  selector: 'pricing-sample-nx-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  name = ''
  quantity = 0
  price = 0
  constructor(
    public productService:ProductService
  ) { }

  ngOnInit(): void {
    console.log();
    
  }

  addProduct(){
    console.log(this.name)
    console.log(this.quantity)
    console.log(this.price)
    this.productService.addProduct(this.name,this.quantity,this.price).subscribe((response)=>{
      console.log('response:',response)
    })
  } 

}