import { IAddProductInput, IAddProductResponse, IProduct } from "@pricing-sample-nx/shared-models";
import { randomNumber } from "@pricing-sample-nx/shared-helpers";
import { addItem } from '../data/product/set-product.data'

export class ProductService {
//kam
   async addProduct(params:IAddProductInput):Promise<IAddProductResponse>{      
        const binding:IProduct = {
            code:randomNumber().toString(),
            price:params.price,
            quantity:params.quantity,
            title:params.name
        }

        await addItem(binding)


        return {
            status:200,message:'OK'
        }
        
    }
}