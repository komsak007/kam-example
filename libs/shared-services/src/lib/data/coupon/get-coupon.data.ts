import { ICoupon } from '@pricing-sample-nx/shared-models';
import { couponSchemaModel as CouponModel } from '@pricing-sample-nx/shared-mongo-lib';

export const getCouponByCode = async (code: string): Promise<ICoupon> => {
  const coupon = await CouponModel.findOne({ code: code }).lean().exec();
  return coupon as ICoupon;
};
