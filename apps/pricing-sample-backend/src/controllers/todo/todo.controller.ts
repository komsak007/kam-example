import {
  IAddTodoInput,
  IAddTodoResponse,
  IdeleteTodoInput,
  IUpdateTodoInput,
} from '@pricing-sample-nx/shared-models';
import { TodoService } from '@pricing-sample-nx/shared-services';
import { graphQLHandler } from '../graphql-handler';
//
import {
  IGraphQLContext,
  ISampleModel,
} from '@pricing-sample-nx/shared-models';
import { validateGetTodoRequest } from '../../schema/todo/todo.schema';

class TodoController {
  public static todoService: TodoService;
  public static instance: TodoController;
  public static getInstance(): TodoController {
    if (!TodoController.instance)
      TodoController.instance = new TodoController();
    return TodoController.instance;
  }

  constructor() {
    TodoController.todoService = new TodoService();
  }

  async addTodoHandler(
    parent,
    args: IAddTodoInput,
    context
  ): Promise<IAddTodoResponse> {
    console.log('Add:', args);
    const validArgs = validateGetTodoRequest(args);
    console.log('validArgs', validArgs);
    return await TodoController.todoService.addTodo(validArgs);
  }

  async getTodoHandler(parent, args, context: IGraphQLContext) {
    const todoResponse = await TodoController.todoService.getTodo();
    return todoResponse;
  }

  //delete kam
  async deleteTodoHandler(
    parent,
    args: IdeleteTodoInput,
    context
  ): Promise<IAddTodoResponse> {
    console.log('id:', args);
    //TodoId:"61ffaced65cb103de05793b1"
    return await TodoController.todoService.deleteTodo(args);
  }

  //update kam
  async updateTodoHandler(
    parent,
    args: IUpdateTodoInput,
    context
  ): Promise<IAddTodoResponse> {
    console.log('id:', args);
    //TodoId:"61ffaced65cb103de05793b1"
    return await TodoController.todoService.updateTodo(args);
  }

  /*async deleteTodoHandler(
    parent,
    args: IAddTodoInput,
    context
  ): Promise<IAddTodoResponse> {
    console.log('delete:', args);
    // const validArgs = validateGetTodoRequest(args);
    // console.log('validArgs', validArgs);
    return await TodoController.todoService.deleteTodo(args);
  }*/
}

const todo: TodoController = new TodoController();
export const todoResolver = {
  Mutation: {
    addTodo: graphQLHandler({
      handler: todo.addTodoHandler,
      validator: (x) => x,
    }),
    deleteTodo: graphQLHandler({
      handler: todo.deleteTodoHandler,
      validator: (x) => x,
    }),
    updateTodo: graphQLHandler({
      handler: todo.updateTodoHandler,
      validator: (x) => x,
    }),
  },
  Query: {
    getTodo: graphQLHandler({
      handler: todo.getTodoHandler,
      validator: (x) => x,
    }),
  },
};
