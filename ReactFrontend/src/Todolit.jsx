import React, { useReducer, useState } from "react";
function Todolist(){
    function todolistReducer(state,action){
        if(action.type=="ADDTODO"){
            return {todos:[...state.todos,action.payload]}
        }
        if(action.type=="DELTODO"){
             const filteredTodos=state.todos.filter((todo,i)=>i!==action.payload)
            return {todos:filteredTodos}
        }
    }
    const [ntd,setNtd]=useState('');
    const [state,dispatch]=useReducer(todolistReducer,{todos:['complete task','go eat','sleep']})
    return(
        <div className="myBox">
            <h1>TodoList</h1>
            <input type="text" onChange={(e)=>setNtd(e.target.value)}/>
            <button onClick={()=>{
                dispatch({type:"ADDTODO",payload:ntd})
            }}>ADD Todo</button>
            <ul>
                {
                    state.todos.map((todo,i)=>{
                        return <li key={i}>{todo} <button onClick={()=>{
                            dispatch({type:"DELTODO",payload:i})
                        }}>Remove</button></li>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist;