import find from "lodash/find";
import remove from "lodash/remove";

import initialState from "./initialState";

import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions/actionTypes";

export default function todo(state = initialState.todos, action) {
  let todos = [];
  switch (action.type) {
    case ADD_TODO:
      todos = state.slice();
      todos.push(action.todo);
      return todos;
    case TOGGLE_TODO:
      todos = state.slice();
      const todoToToggle = find(todos, todo => {
        return todo.id === action.todoId;
      });
      if (todoToToggle) {
        todoToToggle.isDone = action.isChecked;
      }
      return todos;
    case DELETE_TODO:
      todos = state.slice();
      remove(todos, todo => {
        return todo.id === action.todoId;
      });
      return todos;
    default:
      return state;
  }
}
