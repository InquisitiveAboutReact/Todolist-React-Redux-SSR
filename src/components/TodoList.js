import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {deleteTodo} from '../redux/todo/todoAction';

const TodoList = () => {

    const todos = useSelector((state) => state.todoReducer.todos);
    const dispatch = useDispatch();
    console.log("Items====",todos);
    return (
        <div> 
            {
                todos.map(todo=>{
                    return (
                        <li key={todo.id}>
                        {todo.name}
                        <button onClick={()=>dispatch(deleteTodo(todo.id))}>X</button>
                        </li>
                        
                    )
                })
                
            }
            
        </div>
    )
}

export default TodoList
