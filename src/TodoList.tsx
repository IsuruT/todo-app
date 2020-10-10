import React from 'react'
import { TodoListItem } from './TodoListItem'
import { Todo, ToggleTodo, RemoveTodo } from './types'

interface TodoListProps{
    todos: Array<Todo>;
    toggleTodo : ToggleTodo
    removeTodo : RemoveTodo
    
}


export const TodoList: React.FC<TodoListProps> =({todos , toggleTodo , removeTodo})=>{
    console.log(removeTodo)
    return (
    <ul>{todos.map(todo=>{
        return <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
    })}</ul>
    )
}
