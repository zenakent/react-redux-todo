import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleSubmit(this.state.task);
    this.setState({ task: "" });
    this.props.history.push("/todos");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">Task </label>
        <input
          type="text"
          name="task"
          id="task"
          value={this.state.task}
          placeholder="Add a new todo"
          onChange={this.handleChange}
        />
        <button>Add a Todo!</button>
      </form>
    );
  }
}

export default NewTodoForm;
