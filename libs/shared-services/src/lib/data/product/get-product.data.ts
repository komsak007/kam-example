import { IProduct } from '@pricing-sample-nx/shared-models';
import { productSchemaModel as ProductModel } from '@pricing-sample-nx/shared-mongo-lib';

export const getItemByCode = async (code: string): Promise<IProduct> => {
  const product = await ProductModel.findOne({ code: code }).lean().exec();

  return product as IProduct;
};
