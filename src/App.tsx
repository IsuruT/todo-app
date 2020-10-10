import { type } from 'os';
import React, {useState} from 'react';
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';

import {AddTodo, Todo, ToggleTodo , RemoveTodo} from './types'



const initialTodos:Array<Todo> = [
  {id:1, text: 'This is test' , complete: true},
  {id:2, text: 'This is first' , complete: false}
]


const App: React.FC=()=> {
 const [todos, setTodos] = useState(initialTodos)
 console.log(todos)

 const toggleTodos: ToggleTodo = selectedTodo=>{
   const newTodos = todos.map(todo=>{
     if(todo === selectedTodo){
       return {
         ...todo,
         complete : !todo.complete
       }
     }
     return todo;
   })
   setTodos(newTodos)
 }

 const addTodo: AddTodo = newTodo =>{
   newTodo.trim() !== "" &&
   setTodos([{id: todos.length+1, text: newTodo, complete: false}, ...todos])
 }

 const handleDelete: RemoveTodo=(id)=>{
   const newTodo = todos.filter(item=>item.id !== id)
   setTodos(newTodo)
 }

  return (
    <div className='container mt-5'>
    <div className='jumbotron'>
        <AddTodoForm  addTodo={addTodo}/>
        I have <span>{todos.length}</span>  to do.. 
        <TodoList  todos={todos} toggleTodo={toggleTodos} removeTodo={handleDelete}/>
    </div>
    </div>
    
  );
}

export default App;
