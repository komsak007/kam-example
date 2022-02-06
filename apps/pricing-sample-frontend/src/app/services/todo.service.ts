import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { IGetTodoInput } from '@pricing-sample-nx/shared-models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITodo } from '@pricing-sample-nx/shared-models';
import {
  IAddTodoResponse,
  IGetTodoResponse,
} from '@pricing-sample-nx/shared-models';
import {
  ADD_TODO_MUTATE,
  DELETE_TODO_MUTATE,
  GET_TODO_QUERY,
  UPDATE_TODO_MUTATE,
} from './query/todo.query';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(public apollo: Apollo) {}

  getTodo(input: IGetTodoInput): Observable<ITodo[]> {
    return this.apollo
      .query({
        query: GET_TODO_QUERY,
        fetchPolicy: 'no-cache',
        variables: { input },
      })
      .pipe(map((x) => (<{ getTodo: ITodo[] }>x.data)['getTodo']));
  }

  addTodo(todo: string): Observable<IAddTodoResponse> {
    return this.apollo
      .mutate({
        mutation: ADD_TODO_MUTATE,
        fetchPolicy: 'no-cache',
        variables: { Todo: todo },
      })
      .pipe(map((x) => (<{ addTodo: IAddTodoResponse }>x.data)['addTodo']));
  }

  deleteTodo(id: string): Observable<IAddTodoResponse> {
    return this.apollo
      .mutate({
        mutation: DELETE_TODO_MUTATE,
        fetchPolicy: 'no-cache',
        variables: { TodoId: id },
      })
      .pipe(
        map((x) => (<{ deleteTodo: IAddTodoResponse }>x.data)['deleteTodo'])
      );
  }

  updateTodo(id: string, todo: string): Observable<IAddTodoResponse> {
    return this.apollo
      .mutate({
        mutation: UPDATE_TODO_MUTATE,
        fetchPolicy: 'no-cache',
        variables: { TodoId: id, newTodo: todo },
      })
      .pipe(
        map((x) => (<{ updateTodo: IAddTodoResponse }>x.data)['updateTodo'])
      );
  }
}
