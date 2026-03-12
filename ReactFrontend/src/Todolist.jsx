import React  from "react";
import UseTodoList from "./useTodoList";
function Todolist(){
    const [todos,addTodo,removeTodo]=UseTodoList();
    const [todo,setTodo]=React.useState("");
    const ref=React.useRef();
    return(
        <div className="myBox">
            <input type="text" placeholder="Enter Todo" ref={ref} onKeyUp={(ev)=>{setTodo(ev.target.value)}} />
            <button onClick={()=>{addTodo(todo),ref.current.value=''}}>Add Todo</button>
            <ul>
              {
                todos.map((todo,id)=>{
                    return <li>{todo} <button onClick={()=>{removeTodo(id)}}> Remove</button></li>
                })
              }
            </ul>
        </div>
    )
}
export default Todolist