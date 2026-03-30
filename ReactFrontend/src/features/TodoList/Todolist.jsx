import React from "react"
import { addTodo, delTodo } from "./todolistSlice"
import {useDispatch, useSelector} from 'react-redux'
function Todolist(){
const [ntd,setNtd]=React.useState('')
    const {todos}=useSelector(state=>state.todolistReducer)
    const dispatch=useDispatch();
    return <div className="myBox">
        <h1>Todolist</h1>
        <input type="text"  onChange={(ev)=>setNtd(ev.target.value)}/>
        <button onClick={()=>{
                dispatch(addTodo(ntd))
        }}>Add Todo</button>

        <ul>
            {
                todos?.map((todo,id)=>{
                    return <li key={id}>{todo} <button onClick={()=>{
                        dispatch(delTodo(id))
                    }}>Remove</button></li>
                })
            }
        </ul>
    </div>
}
export default Todolist