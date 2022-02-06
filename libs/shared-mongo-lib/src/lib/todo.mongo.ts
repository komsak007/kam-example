import { ITodoData } from '@pricing-sample-nx/shared-models';
import * as mongoose from 'mongoose';
import { Document, Schema } from 'mongoose';

export const todoSchemaModel = mongoose?.model<ITodoData & Document>(
  'todolist',
  new Schema(
    {
      todo: {
        type: String,
      },
    },
    { timestamps: true }
  )
);
