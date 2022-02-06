import { gql } from 'apollo-angular';

export const TodoTypeDefs = gql`
  type AddTodoResponse {
    status: Int
    message: String
  }

  type DeleteTodoResponse {
    status: Int
    message: String
  }

  type GetTodoResponse {
    id: String
    todo: String
    createAt: Date
    updatedAt: Date
  }

  input GetTodoInput {
    todo: String
  }
  extend type Mutation {
    addTodo(Todo: String): AddTodoResponse
    deleteTodo(TodoId: String): DeleteTodoResponse
    updateTodo(TodoId: String, newTodo: String): DeleteTodoResponse
  }

  extend type Query {
    getTodo(todo: GetTodoInput): [GetTodoResponse]
  }
`;
