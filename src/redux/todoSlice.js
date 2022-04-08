import { createSlice } from "@reduxjs/toolkit";

const options = {
name: 'todos',
initialState: [
    { id: 1, title: 'todo1', completed: false},
    { id: 2, title: 'todo2', completed: false},
    { id: 3, title: 'todo3', completed: false},
],

reducers: {
    addTodo: (state, action) => {
        const newTodo = {
            id: Date.now(),
            title: action.payload.title,
            completed: false
        }
        state.push(newTodo)
    },
    deleteTodo: (state, action) => {
        return state.filter((todo) => todo.id !== action.payload.id)
    }
}
}

const todoSlice = createSlice(options)
export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer;