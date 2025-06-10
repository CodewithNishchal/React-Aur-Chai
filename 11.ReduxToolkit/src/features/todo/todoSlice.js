import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {//here state gives us values of current state
        //action provide values like id to remove state of that particular
        //id or add the state having that id
        addTodo: (state, action) => { //we always get state and action as part of the syntax
            const todo = {
                id: nanoid(),
                text: action.payload //payload is itself an object
            }
            state.todos.push(todo)
         }, 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => 
                todo.id !== action.payload
            )
        },      
        updateTodo: (state, action) => {
            const myTodo = {
                id: action.payload.id,
                text: action.payload.text
            }

            state.todos = state.todos.map(todo => 
                todo.id === myTodo.id ? myTodo : todo
            )
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer