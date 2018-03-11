import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import * as todoActions from "../../actions/todoActions";
import "./AddTodo.css";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      todoName: ""
    };
  }

  updateTodo = event => {
    this.setState({
      todoName: event.target.value
    });
  };

  addTodo = event => {
    event.preventDefault();
    const newTodo = {
      id:
        Math.random()
          .toString(36)
          .substring(2) + new Date().getTime().toString(36),
      name: this.state.todoName,
      isDone: false
    };
    this.setState({
      todoName: ""
    });
    this.props.todoActions.addTodo(newTodo);
  };

  render() {
    return (
      <form onSubmit={this.addTodo}>
        <input
          type="text"
          className="tdl-new"
          placeholder="Write new item and hit 'Enter'..."
          value={this.state.todoName}
          onChange={this.updateTodo}
        />
      </form>
    );
  }
}

AddTodo.propTypes = {
  todoActions: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(AddTodo);
