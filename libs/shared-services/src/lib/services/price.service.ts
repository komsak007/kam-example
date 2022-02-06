import { IGetPriceInput } from '@pricing-sample-nx/shared-models';
import { getCouponByCode } from '../data/coupon/get-coupon.data';
import { getItemByCode } from '../data/product/get-product.data';
import { applyCoupon } from '../domains/discount-domain';

import { containStock } from '../domains/product-domain';
import { OutOfStockError } from '../errors/out-of-stock-error';
import { ProductNotFound } from '../errors/product-error';

export class PriceService {
  async getPrice(priceRequest: IGetPriceInput) {
    const { itemCode, coupon: couponCode, quantity } = priceRequest;
    const item = await getItemByCode(itemCode);

    if (!item) {
      throw new ProductNotFound('Product not found');
    }

    const coupon = couponCode ? await getCouponByCode(couponCode) : null;
    if (!containStock(item, quantity)) {
      throw new OutOfStockError('Item exceeds stock');
    }

    const { price } = item;

    console.log('price [LOG]:--> ', price);
    const normalPrice = price * quantity;
    const productWithAppliedCoupon = applyCoupon(coupon, normalPrice, item);
    console.log(
      'productWithAppliedCoupon [LOG]:--> ',
      productWithAppliedCoupon
    );
    return productWithAppliedCoupon;
  }
}
