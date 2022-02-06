import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';
import { IProduct } from '@pricing-sample-nx/shared-models';

export const productSchemaModel = mongoose?.model<IProduct & Document>(
  'products',
  new Schema(
    {
      title: String,
      code: {
        type: String,
        index: true,
      },
      quantity: Number,
      price: Number,
    },
    { timestamps: true }
  )
);
