import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/todo/todoAction';
import {v4 as uuidv4} from "uuid";
import TodoList from './TodoList';

const TodoInput = () => {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    const onChange = (e)=>{
      setTodo(e.target.value);
    }

    const onSubmit = event => {
        event.preventDefault();
        if(todo.trim() === '')return;
        
        dispatch(addTodo({id:uuidv4(), name:todo}));
      
        setTodo('');
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text'
                placeholder='add todo'
                value={todo}
                name='todo'
                onChange={onChange}
                />
                <button type='submit'>Add Item</button>
            </form>
            <TodoList/>
        </div>
    )
}

export default TodoInput
