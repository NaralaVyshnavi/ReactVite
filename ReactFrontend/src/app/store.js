import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import todolistReducer from "../features/todolist/todolistSlice"
import likeDislikeReducer from "../features/likeDislike/likeDislikeSlice"

export  const store=configureStore({
    reducer:{
        counterReducer,
        todolistReducer,
        likeDislikeReducer,
    }

})