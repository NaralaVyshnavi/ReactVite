import { createSlice } from "@reduxjs/toolkit"
const initialState={
    likes:0,
    dislikes:0
}

export const likeDislikeSlice=createSlice({
    name:"likeDislike",
    initialState,
    reducers:{
        like:(state)=>{state.likes++},
        dislike:(state)=>{state.dislikes++}
    }
})
export const {like,dislike}=likeDislikeSlice.actions;
const likeDislikeReducer=likeDislikeSlice.reducer;
export default likeDislikeReducer;