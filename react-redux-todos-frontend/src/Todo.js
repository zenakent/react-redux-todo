import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      isEditing: false
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.isEditing = this.isEditing.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  handleComplete() {
    this.props.completeTodo(this.props.id); //original
    // this.props.completeTodo(this.props.id, !this.props.completed);
  }

  isEditing() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.editTodo(this.props.id, this.state.task);
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleSubmit}>
            <input
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <li
            onClick={this.handleComplete}
            className={this.props.completed ? "completed" : ""}
          >
            {this.props.task}
          </li>
          <button onClick={this.isEditing}>EDIT</button>
          <button onClick={this.handleRemove}>X</button>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
