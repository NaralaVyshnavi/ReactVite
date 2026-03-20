import {createSlice} from '@reduxjs/toolkit'
const initialState={
    count:0
}

export const counterSlice=createSlice({
    name:'Counter',
    initialState,
    reducers:{
        inc:(state)=>{state.count++},
        dec:(state)=>{state.count--}
    }
})
const counterReducer=counterSlice.reducer;
export  default counterReducer;
export const {inc,dec}=counterSlice.actions;