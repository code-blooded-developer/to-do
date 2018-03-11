import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import * as todoActions from "../../actions/todoActions";
import "./DisplayTodo.css";

class DisplayTodo extends Component {
  toggleTodo = (event, todoId) => {
    this.props.todoActions.toggleTodo(todoId, event.target.checked);
  };
  render() {
    const todos = this.props.todos.map((todo, index) => {
      return (
        <li key={index}>
          <label>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={event => this.toggleTodo(event, todo.id)}
            />
            <i />
            <span>{todo.name}</span>
            <a onClick={() => this.props.todoActions.deleteTodo(todo.id)}>–</a>
          </label>
        </li>
      );
    });
    return (
      <div className="tdl-content">
        <ul>{todos}</ul>
      </div>
    );
  }
}

DisplayTodo.propTypes = {
  todos: PropTypes.array,
  todoActions: PropTypes.object
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodo);
