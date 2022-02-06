import * as Joi from '@hapi/joi';

export interface IGraphQLContext {
  accessToken: string;
}

export interface ISampleModel {
  name: string;
  no: number;
}

export const HTTPResultObjectValidate = {
  status: Joi.number().required(),
  value: Joi.any(),
  expiresAt: Joi.string().allow('').allow(null),
};

export const sampleObjectValidate = {
  name: Joi.string().required(),
  no: Joi.number().required(),
};
