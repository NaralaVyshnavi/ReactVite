import { act } from "react"

const initialState={
    todos:['complete task','take a bath','go to shopping']
}
function todolistReducer(state=initialState,action){
    if(action.type=="ADDTODO"){
        return {todos: [...state.todos,action.payload]}
    }
    if(action.type=="DELTODO"){
        const filteredTodos=state.todos.filter((todo,i)=>i!=action.payload)
        return {todos:[...filteredTodos]}
    }
    return state
}
export default todolistReducer