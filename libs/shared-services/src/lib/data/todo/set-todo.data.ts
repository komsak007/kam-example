import { ITodoInput } from '@pricing-sample-nx/shared-models';
import { todoSchemaModel as TodoModel } from '@pricing-sample-nx/shared-mongo-lib';

export const addTodo = (todo: ITodoInput) => {
  return new Promise((resolve, reject) => {
    console.log(todo);
    TodoModel.create(todo)
      .then((c) => {
        resolve(c ? c.toObject() : null);
      })
      .catch((ex) => {
        reject(ex);
      });
  });
};

//delete kam
export const deleteTodo = (todo: ITodoInput) => {
  return new Promise((resolve, reject) => {
    console.log(todo);
    TodoModel.findByIdAndDelete(todo)
      .then((c) => {
        resolve(c ? c.toObject() : null);
      })
      .catch((ex) => {
        reject(ex);
      });
  });
};

//update kam
export const updateTodo = (id: any, newtodo: any) => {
  return new Promise((resolve, reject) => {
    console.log(id, newtodo);
    TodoModel.findByIdAndUpdate(id, {
      $set: newtodo,
    })
      .then((c) => {
        resolve(c ? c.toObject() : null);
      })
      .catch((ex) => {
        reject(ex);
      });
  });
};
