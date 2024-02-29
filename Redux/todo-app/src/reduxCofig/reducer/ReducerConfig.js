import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice(
    {
        name: 'Todos',
        initialState : {
            todos: [
                {
                    title: "hello world",
                    id : 1
                }
            ]
        },
        reducers: {
            addTodo: (state, action)=>{
                state.todos.push({
                    title: action.payload.title,
                    id: nanoid()
                })
            },
            removeTodo: (state, action)=>{
                state.todos.splice(action.payload.index,1)
            },
            deleteTodo: (state, action)=>{
                state.todos = []
            }
        }
    }
)

export const {addTodo, removeTodo, deleteTodo} = todoSlice.actions
export default todoSlice.reducer