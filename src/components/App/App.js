import React, { Component } from "react";
import "./App.css";
import DisplayTodo from "../DisplayTodo/DisplayTodo";
import AddTodo from "../AddToDo/AddTodo";

class App extends Component {
  render() {
    return (
      <div className="tdl-holder">
        <h2>To Do List</h2>
        <DisplayTodo />
        <AddTodo />
      </div>
    );
  }
}

export default App;
