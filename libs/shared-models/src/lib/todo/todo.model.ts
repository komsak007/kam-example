import * as Joi from '@hapi/joi';

export interface IAddTodoInput {
  Todo: string;
}

//delete
export interface IdeleteTodoInput {
  TodoId: string;
}

export interface IDeleteTodoResponse {
  status: number;
  message: string;
}
//update
export interface IUpdateTodoInput {
  TodoId: string;
  newTodo: string;
}

export interface IAddTodoResponse {
  status: number;
  message: string;
}

export interface ITodoData {
  _id: string;
  todo: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITodo {
  id: string;
  todo: string;
  createAt: Date;
  updatedAt: Date;
}

export interface ITodoInput {
  todo: string;
}

export interface IGetTodoInput {
  todo: string;
}

export interface IGetTodoResponse {
  todos: ITodo[];
}

//
/*export interface IGraphQLContext {
  accessToken: string;
}

export interface ITodo {
  name: string;
  no: number;
}

export const HTTPResultObjectValidate = {
  status: Joi.number().required(),
  value: Joi.any(),
  expiresAt: Joi.string().allow('').allow(null),
};

export const sampleObjectValidate = {
  todo: Joi.string().required(),
  no: Joi.number().required(),
};*/
