import * as Joi from '@hapi/joi';

export const GetTodoRequestValidate = {
  Todo: Joi.string().required(),
};
export const GetTodoResponseValidate = {
  todo: Joi.number().required(),
  message: Joi.string().required().allow(''),
};
