import React from "react";

import todosData from "../todosData";

import TaskListComponent from "./TaskListComponent";

//class version
class TaskListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          /* return {
            ...todo,
            completed: !todo.completed
          }; */
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }
  render() {
    const todoItems = this.state.todos.map(item => (
      <TaskListComponent
        key={item.id} //changed from {item}for test
        item={item.text}
        completed={item.completed}
        handleChange={this.handleChange}
      />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}
export default TaskListContainer;
