import { ITodo, ITodoData } from '@pricing-sample-nx/shared-models';
import { todoSchemaModel as TodoModel } from '@pricing-sample-nx/shared-mongo-lib';

export const getItemByCode = async (code: string): Promise<ITodoData> => {
  const todo = await TodoModel.findOne({ code: code }).lean().exec();

  return todo as ITodoData;
};

export const getTodo = async (): Promise<ITodoData[]> => {
  // const todo = await TodoModel.find({}).lean().exec();
  const todo = await TodoModel.find({}).lean().exec();

  return todo as ITodoData[];
}