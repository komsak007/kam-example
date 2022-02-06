import {
  HTTPResultObjectValidate,
  sampleObjectValidate,
} from '@pricing-sample-nx/shared-models';
import { validate } from '@pricing-sample-nx/shared-helpers';

export function validateResponseSample<T>(data: T): T {
  return validate(sampleObjectValidate, data);
}

export function validateRequestSample<T>(data: T): T {
  return validate({}, data);
}

export function validateRequestGetSample<T>(data: T): T {
  return validate(sampleObjectValidate, data);
}

export function validateResponseGetSample<T>(data: T): T {
  const result = validate<T>(HTTPResultObjectValidate, data);
  return result;
}
