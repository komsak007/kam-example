import { ICoupon } from '@pricing-sample-nx/shared-models';

export const couponTypes = {
  percent: 'percent',
  value: 'value',
};

export const validCouponType = (coupon: ICoupon) => {
  return Object.values(couponTypes).includes(coupon.type);
};

export const isCouponValid = (coupon: ICoupon) => {
  return !!coupon && validCouponType(coupon) && !!coupon.expired_at;
};

export const isConsumed = (coupon: ICoupon) => {
  return !!coupon.consumed_at;
};
