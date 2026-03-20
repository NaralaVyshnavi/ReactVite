import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const initialState={
    todos:['pratice','take a bath','get Ready']
}
export const todolistSlice=createSlice({
    name:"todolist",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        },
        delTodo:(state,action)=>{
            state.todos.splice(action.payload,1);
        }
    }
})
export  const {addTodo,delTodo}=todolistSlice.actions;
const todolistReducer=todolistSlice.reducer;
export default todolistReducer