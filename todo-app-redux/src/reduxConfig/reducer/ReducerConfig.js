import { createSlice, nanoid } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: "Todo",
    initialState : {
        todo: [
            {
                title : "hello world",
                id : 1
            }
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            const todos = {
                title : action.payload.title,
                id: nanoid()
            }
            state.todo.push(todos);
        }
    }
})
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;