import React,{ChangeEvent, FormEvent, useState} from 'react'
import { AddTodo } from './types'
import './styles.scss';

interface AddTodoFormProps {
    addTodo: AddTodo
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) =>{
    const [newTodo, setNewTodo] = useState("")

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setNewTodo(e.target.value)
    }

    const handleSubmit=(e:FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        addTodo(newTodo)
        setNewTodo("")
    }

    return (
        <form>
            <input type="text" value={newTodo} onChange={handleChange} className="form-input mt-1 block w-full" placeholder="to do......"></input>
            <button className='btn btn-secondary ml-5' type='submit' onClick={handleSubmit}> Add Todo </button>
        </form>
    )
}
