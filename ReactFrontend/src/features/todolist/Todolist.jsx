import {useSelector,useDispatch} from 'react-redux';
import React from 'react';
import { addTodo, delTodo } from './todolistSlice';
function Todolist(){
    const {todos}=useSelector(state=>state.todolistReducer);
    const dispatch=useDispatch()
    var [ntd,setNtd]=React.useState('');
    return(
        <div className="myBox">
            <h1>TodoList</h1>
            <input type="text" id="input" onChange={(e)=>{setNtd(e.target.value)}} />
            <button onClick={()=>{
                dispatch(addTodo(ntd));
                document.getElementById("input").value="";
            }}>Add Todo</button>
            <ul>
                {
                    todos.map((todo,i)=>{
                        return <li key={i}>{todo} <button onClick={()=>{
                            dispatch(delTodo(i))
                        }}>Delete</button></li>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist