import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAddTodoMutation,  useDeleteTodoMutation,  useGetAllTodosQuery } from "../../services/todosAPI";
function Todos(){
    const [ntd,setNtd]=useState('')
    const {data,error,isLoading}=useGetAllTodosQuery()
    const [deleteTodo]=useDeleteTodoMutation();
    const [addTodo]=useAddTodoMutation(ntd)
    console.log(data)
    const dispatch=useDispatch()
     function handleAddTodo(){
        addTodo(ntd)
     }
     function handleDeleteTodo(id){
        deleteTodo(id)
     }
    return (
        <div>
            <h1>
                Todos
            </h1>
            <input type="text"  onChange={(ev)=>setNtd(ev.target.value)}/>
            <button onClick={()=>{
                handleAddTodo()
            }}>Add todo</button>
            <ul>
            {
                isLoading?(
                    <img src="https://assets-v2.lottiefiles.com/a/d5392796-1169-11ee-908e-b33ed8d96ca4/kW0SJwvz27.gif" width="100"/>
                ):(
                
                        data?.map((todo,id)=>{
                            return <li key={todo.id}>{todo.task}<button onClick={()=>{
                                    handleDeleteTodo(todo.id)
                            }}>Remove</button> <button>Edit</button></li>
                        })

                        
                    
                )

                
            }
            </ul>
        </div>
    )
}
export default Todos