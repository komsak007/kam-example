import {
  IAddTodoInput,
  IAddTodoResponse,
  IdeleteTodoInput,
  IDeleteTodoResponse,
  IUpdateTodoInput,
  ITodo,
  ITodoInput,
} from '@pricing-sample-nx/shared-models';
import { getTodo } from '../data/todo/get-todo.data';
import { addTodo, deleteTodo, updateTodo } from '../data/todo/set-todo.data';

export class TodoService {
  //kam
  async addTodo(params: IAddTodoInput): Promise<IAddTodoResponse> {
    const binding: ITodoInput = {
      todo: params.Todo,
    };
    await addTodo(binding);
    return {
      status: 200,
      message: 'OK',
    };
  }

  async getTodo(): Promise<ITodo[]> {
    const todos = await getTodo();
    // console.log('GET TODO RESULT : ', todos)

    const result = todos.map((todo) => {
      // console.log(todo);
      // const obj1 = Object.assign(todo,{id:todo._id})

      // const obj2 = {...todo, { id:todo._id }}
      // {
      //     _id:'id',
      //     id:"newid",
      //     todo:"name",
      //     createdAt:'Date',
      //     updatedAt:'Date'
      // }

      // console.log('obj1',obj1)

      const obj: ITodo = {
        id: todo._id,
        todo: todo.todo,
        createAt: todo.createdAt,
        updatedAt: todo.updatedAt,
      };

      return obj;
    });
    return result;
    //await getTodo()
  }

  //delete kam
  async deleteTodo(params: IdeleteTodoInput): Promise<IDeleteTodoResponse> {
    //TodoId:"61ffaced65cb103de05793b1"
    const binding: any = {
      //todo: "61ffaced65cb103de05793b1"
      //_id เอาไปเทียบ ดาต้าเบสใน robo _id เหมือนกัน
      _id: params.TodoId,
    };
    await deleteTodo(binding);
    return {
      status: 200,
      message: 'OK',
    };
  }

  //update kam
  async updateTodo(params: IUpdateTodoInput): Promise<IDeleteTodoResponse> {
    const id: any = {
      //_id เอาไปเทียบ ดาต้าเบสใน robo _id เหมือนกัน
      _id: params.TodoId,
    };
    const newTodo: any = {
      //_id เอาไปเทียบ ดาต้าเบสใน robo _id เหมือนกัน
      todo: params.newTodo,
    };
    await updateTodo(id, newTodo);
    return {
      status: 200,
      message: 'OK',
    };
  }

  // async deleteTodo(params: any): Promise<IAddTodoResponse> {
  //   console.log('Param:', params);

  //   const binding: any = {
  //     _id: params.TodoId,
  //   }; // _id: "....."
  //   await deleteTodo(binding);
  //   return {
  //     status: 200,
  //     message: 'OK',
  //   };
  // }
}
