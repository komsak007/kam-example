import {
    HTTPResultObjectValidate,
    sampleObjectValidate,
  } from '@pricing-sample-nx/shared-models';
  import { validate } from '@pricing-sample-nx/shared-helpers';

  import {
    GetTodoRequestValidate,
    GetTodoResponseValidate,
  } from '@pricing-sample-nx/shared-models';
  
  // export function validateResponseSample<T>(data: T): T {
  //   return validate(sampleObjectValidate, data);
  // }
  
  // export function validateRequestSample<T>(data: T): T {
  //   return validate({}, data);
  // }
  
  // export function validateRequestGetSample<T>(data: T): T {
  //   return validate(sampleObjectValidate, data);
  // }
  
  // export function validateResponseGetSample<T>(data: T): T {
  //   const result = validate<T>(HTTPResultObjectValidate, data);
  //   return result;
  // }

  export function validateGetTodoRequest<T>(data: T): T {
    return validate(GetTodoRequestValidate, data);
  }
  export function validateGetTodoResponse<T>(data: T): T {
    return validate(GetTodoResponseValidate, data);
  }

  
  