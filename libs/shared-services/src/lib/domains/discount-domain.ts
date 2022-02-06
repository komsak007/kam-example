import { ICoupon, IProduct } from '@pricing-sample-nx/shared-models';
import * as dayjs from 'dayjs';
import { couponTypes } from './coupon-domain';

export const applyCoupon = (
  coupon: ICoupon | null,
  price: number,
  item: IProduct,
  now = new Date()
) => {
  console.log('coupon [LOG]:--> ', coupon);
  if (!coupon) {
    console.log('1');
    console.log('price [LOG]:--> ', price);
    return { normalPrice: price, price, message: '' };
  }
  const { ok, error } = validateCoupon(coupon, price, item, now);
  if (!ok) {
    return {
      normalPrice: price,
      price,
      message: error,
    };
  }
  switch (coupon.type) {
    case couponTypes.percent:
      return {
        normalPrice: price,
        price: price * (1 - coupon.discount_pct / 100),
        message: 'Coupon applied',
      };
    case couponTypes.value: {
      return {
        normalPrice: price,
        price: price - coupon.discount_value,
        message: 'Coupon applied',
      };
    }
  }
  return {
    ok: false,
    newPrice: null,
  };
};

export const validateCoupon = (
  coupon: ICoupon,
  price: number,
  item: IProduct,
  now = new Date()
) => {
  if (dayjs(coupon.expired_at).isBefore(dayjs(now))) {
    return {
      ok: false,
      error: 'Coupon expired',
    };
  }
  return {
    ok: true,
  };
};
