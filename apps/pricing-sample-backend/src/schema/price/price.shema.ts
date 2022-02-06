import { validate } from '@pricing-sample-nx/shared-helpers';
import {
  GetPriceRequestValidate,
  GetPriceResponseValidate,
} from '@pricing-sample-nx/shared-models';

export function validateGetPriceRequest<T>(data: T): T {
  return validate(GetPriceRequestValidate, data);
}
export function validateGetPriceResponse<T>(data: T): T {
  return validate(GetPriceResponseValidate, data);
}
