import { IProduct } from '@pricing-sample-nx/shared-models';

export const containStock = (item: IProduct, quantity: number): boolean => {
  return quantity <= item.quantity;
};
