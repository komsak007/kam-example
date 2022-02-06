import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';
import { ICoupon } from '@pricing-sample-nx/shared-models';

export const couponSchemaModel = mongoose?.model<ICoupon & Document>(
  'coupons',
  new Schema(
    {
      code: {
        type: String,
        index: true,
      },
      consumed_at: Date,
      valid_items: {
        type: Array,
        index: true,
      },
      type: String,
      discount_pct: Number,
      expired_at: Date,
      discount_value: Number,
    },
    { timestamps: true }
  )
);
