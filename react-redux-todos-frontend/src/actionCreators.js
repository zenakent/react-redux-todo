export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const GET_TODOS = "GET_TODO";

const APIURL = "http://localhost:3001/api/todos";

function handleTodos(data) {
  return {
    type: GET_TODOS,
    data
  };
}

// export function addTodo(task) {
//   return {
//     type: ADD_TODO,
//     task
//   };
// }

function handleAdd(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

// export function removeTodo(id) {
//   return {
//     type: REMOVE_TODO,
//     id
//   };
// }

function handleRemove(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}

export function getTodos() {
  return dispatch => {
    return fetch(APIURL)
      .then(res => res.json())
      .then(data => dispatch(handleTodos(data)))
      .catch(err => console.log("SOME ERROR", err));
  };
}

export function addTodo(task) {
  return dispatch => {
    return fetch(APIURL, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({ task })
    })
      .then(res => res.json())
      .then(data => dispatch(handleAdd(data)))
      .catch(err => console.log("SOMETHING WENT WRONG", err));
  };
}

export function removeTodo(id) {
  return dispatch => {
    return fetch(`${APIURL}/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => dispatch(handleRemove(id)))
      .catch(err => console.log("SOMETHING WENT WRONG", err));
  };
}

//====================================================

export function editTodo(id, updatedTask) {
  return {
    type: EDIT_TODO,
    id,
    updatedTask
  };
}

export function completeTodo(id, completeTodo) {
  return {
    type: COMPLETE_TODO,
    id,
    completeTodo
  };
}
