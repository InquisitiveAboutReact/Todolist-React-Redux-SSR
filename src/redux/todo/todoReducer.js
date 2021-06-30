import { ADD_TODO, DELETE_TODO } from "./todoTypes";
import {v4 as uuidv4} from "uuid";

const initialState = {
  todos: [
    {
      id: uuidv4(),
      name: "Go to the gym",
      //compete: false,
    },
    {
      id: uuidv4(),
      name: "Go to the market",
      //compete: true,
    },
  ],
};

const todoReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
