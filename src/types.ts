import { type } from "os"

export type Todo = {
    id: number,
    text : string,
    complete: boolean
  }

export type ToggleTodo = (selectedTodo: Todo) => void

export type AddTodo =(newTodo: string) => void

export type RemoveTodo =(Todo: number) => void
