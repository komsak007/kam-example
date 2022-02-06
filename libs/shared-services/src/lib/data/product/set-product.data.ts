import { IProduct } from '@pricing-sample-nx/shared-models';
import { productSchemaModel as ProductModel } from '@pricing-sample-nx/shared-mongo-lib';

export const addItem = (product: IProduct) => {
  return new Promise((resolve, reject) => {
    ProductModel.create(product)
      .then((c) => {
        resolve(c ? c.toObject() : null);
      })
      .catch((ex) => {
        reject(ex);
      });
  });
};
