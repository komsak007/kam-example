import { gql } from 'apollo-angular';
//get
export const GET_TODO_QUERY = gql`
  query getTodo($input: GetTodoInput) {
    getTodo(todo: $input) {
      id
      todo
      createAt
      updatedAt
    }
  }
`;

//ADD
export const ADD_TODO_MUTATE = gql`
  mutation addTodo($Todo: String) {
    addTodo(Todo: $Todo) {
      status
      message
    }
  }
`;

//delete
export const DELETE_TODO_MUTATE = gql`
  mutation deleteTodo($TodoId: String) {
    deleteTodo(TodoId: $TodoId) {
      status
      message
    }
  }
`;

// update
export const UPDATE_TODO_MUTATE = gql`
  mutation updateTodo($TodoId: String, $newTodo: String) {
    updateTodo(TodoId: $TodoId, newTodo: $newTodo) {
      status
      message
    }
  }
`;
