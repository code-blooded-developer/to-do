import * as actionTypes from "./actionTypes";

export function addTodo(todo) {
  return { type: actionTypes.ADD_TODO, todo };
}

export function toggleTodo(todoId, isChecked) {
  return { type: actionTypes.TOGGLE_TODO, todoId, isChecked };
}

export function deleteTodo(todoId) {
  return { type: actionTypes.DELETE_TODO, todoId };
}
