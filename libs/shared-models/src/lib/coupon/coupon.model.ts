import { IProduct } from '@pricing-sample-nx/shared-models';

export interface ICoupon {
  code: string;
  valid_items: IProduct[];
  type: string;
  discount_pct: number;
  discount_value: number;
  consumed_at: Date;
  expired_at: Date;
}
