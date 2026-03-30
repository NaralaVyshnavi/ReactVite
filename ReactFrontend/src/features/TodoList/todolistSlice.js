import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todos:['goto goa','sleep','study','eat']
}
export const todolistSlice=createSlice({
    name:"Todolist",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        },
        delTodo:(state,action)=>{
            state.todos.splice(action.payload,1)
        }
    }
})
export const  {addTodo,delTodo}=todolistSlice.actions;
const todolistReducer=todolistSlice.reducer
export default todolistReducer