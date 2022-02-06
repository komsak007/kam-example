import { IAddProductInput, IAddProductResponse } from '@pricing-sample-nx/shared-models';
import { ProductService } from '@pricing-sample-nx/shared-services';
import { graphQLHandler } from '../graphql-handler';

// import {
//   IGetPriceInput,
//   IGraphQLContext,
// } from '@pricing-sample-nx/shared-models';

class ProductController {
    public static productService: ProductService
    public static instance: ProductController;
    public static getInstance(): ProductController {
        if (!ProductController.instance)
            ProductController.instance = new ProductController();
        return ProductController.instance;
    }

    constructor() {
        ProductController.productService = new ProductService();
    }


    async addProductHandler(parent, args:IAddProductInput, context):Promise<IAddProductResponse> {
        return await ProductController.productService.addProduct(args)
    }
}

const product: ProductController = new ProductController();
export const productResolver = {
    Mutation: {
        addProduct:
            graphQLHandler({
                handler: product.addProductHandler,
                validator: x => x,
            })
    }
};