import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count:0
}
export const counterslice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        inc:(state)=>{
            state.count++
        },
        dec:(state)=>{
            state.count--
        }
    }
})
export const {inc,dec} =counterslice.actions
const counterReducer=counterslice.reducer;

export default counterReducer