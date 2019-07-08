import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  GET_TODOS
} from "./actionCreators";

// const initialState = {
//   todos: [],
//   id: 0
// };

const initialState = {
  todos: []
};

function rootReducer(state = initialState, action) {
  let todos;
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.data };
    // case ADD_TODO:
    //   let newState = { ...state };
    //   newState.id++;
    //   return {
    //     ...newState,
    //     todos: [
    //       ...newState.todos,
    //       {
    //         task: action.task,
    //         id: newState.id,
    //         completed: false
    //       }
    //     ]
    //   };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.todo] };
    case REMOVE_TODO:
      todos = state.todos.filter(val => val._id !== action.id);
      return { ...state, todos };
    case EDIT_TODO:
      debugger;
      todos = state.todos.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, task: action.updatedTask };
        }
        return todo;
      });
      return { ...state, todos };
    case COMPLETE_TODO:
      todos = state.todos.map(todo => {
        if (todo.id === action.id) {
          console.log({ ...todo, completed: !todo.completed });
          return { ...todo, completed: !todo.completed };
        }
        console.log(todo);
        return todo;
      });
      console.log(state);
      return { ...state, todos };
    default:
      return state;
  }
}

export default rootReducer;
