import React from 'react'
import {Todo , ToggleTodo ,RemoveTodo} from './types'
import './TodoListItem.css'
import './styles.scss';


interface TodoListItemProps{
    todo:Todo;
    toggleTodo : ToggleTodo;
    removeTodo : RemoveTodo
}



export const TodoListItem: React.FC<TodoListItemProps> =({todo , toggleTodo , removeTodo})=>{
    return (
        <div className='jumbotrone'>
        <li>
            <label className={todo.complete ? 'complete' : undefined}>
                <input id='input' type='checkbox' checked={todo.complete} onChange={()=>toggleTodo(todo)}/>
                {todo.text}
                <button className='btn btn-primary btn-sm mt-2 ml-4' onClick={()=>removeTodo(todo.id)}>Delete</button>
            </label>
        </li>
        </div>
    )
}
