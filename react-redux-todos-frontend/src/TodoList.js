import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { addTodo, removeTodo, editTodo, completeTodo } from "./actionCreators";
import { Route } from "react-router-dom";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }

  handleAdd(val) {
    this.props.addTodo(val);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  editTodo(id, updatedTask) {
    this.props.editTodo(id, updatedTask);
  }

  completeTodo(id) {
    this.props.completeTodo(id); // original
    // this.props.completeTodo(id, completeTodo);
  }

  render() {
    console.log(this.props);
    let todos = this.props.todos.map((val, index) => (
      <Todo
        // removeTodo={this.removeTodo.bind(this, val.id)}
        removeTodo={this.removeTodo}
        completeTodo={this.completeTodo}
        editTodo={this.editTodo}
        completed={val.completed}
        task={val.task}
        key={index}
        id={val.id}
        isEditing={val.isEditing}
      />
    ));
    return (
      <div>
        <Route
          path="/todos/new"
          component={props => (
            <NewTodoForm {...props} handleSubmit={this.handleAdd} />
          )}
        />
        <Route exact path="/todos" component={() => <div>{todos}</div>} />
      </div>
    );
  }
}

function mapStatetoProps(reduxState) {
  return {
    todos: reduxState.todos
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     addTodo: function(task) {
//       dispatch({
//         type: "ADD_TODO",
//         task
//       });
//     }
//   };
// }

export default connect(
  mapStatetoProps,
  { addTodo, removeTodo, editTodo, completeTodo }
)(TodoList);
