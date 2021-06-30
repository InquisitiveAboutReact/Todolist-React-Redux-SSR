import {ADD_TODO, DELETE_TODO} from './todoTypes';

export const addTodo = (todo) => {
    return {
        type : ADD_TODO,
        payload: todo
    }
}

export const deleteTodo = (todoId) => {
    return {
        type : DELETE_TODO,
        payload: todoId
    }
}