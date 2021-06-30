import { combineReducers, createStore, applyMiddleware } from "redux";
import todoReducer from "./todo/todoReducer";

// create store and pass the todo reducer inside create store.. You can pass other reducers inside the root reducer as well

const rootreducer = combineReducers({
  todoReducer: todoReducer,
});

const store = createStore(
  rootreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
