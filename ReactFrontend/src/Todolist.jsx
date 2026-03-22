import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { addTodo, delTodo } from "./action"

function Todolist(props){
    console.log(props)
    useEffect(()=>{
        console.log("Todolist Rendered")
    })
    const [ntd,setNtd]=useState('');
    return(
        <div className="myBox">
            <h1>TodoList</h1>
            <input type="text" onChange={(e)=>setNtd(e.target.value)}/>
            <button onClick={()=>{
                props.dispatch(addTodo(ntd))
            }}>Add</button>
            <ul>
                {
                  props.todos.map((todo,i)=>{
                    return <li key={i}>{todo} <button
                     onClick={()=>{
                        props.dispatch(delTodo(i))
                                                    }}
                    >Remove</button></li>
                  })  
                }
            </ul>
        </div>
    )
}
export default connect(store=>store.todolistReducer)(Todolist)