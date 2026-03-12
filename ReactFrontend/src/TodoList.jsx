import React from "react";
import Todo from './Todo.jsx'
function TodoList(){
    const [todos,setTodos]=React.useState(["hello","gotogoa","wakeup"]);
    const [todo,setTodo]=React.useState("");
    const ref=React.useRef();
    React.useEffect(()=>{
        ref.current.focus();
    },[])
    function addTodo(todo){
        setTodos((todos)=>{
            todos.push(todo);
            return[...todos];
        })
        ref.current.value="";
    }
    const handleDelete=React.useCallback(function(id){
         setTodos((todos)=>{
           return  todos.filter((todo,i)=>{
                if(i!==id){
                    return true
                }
            })
        })
    },[])
       
    
    return(
        <div className="myBox">
            <input type="text" ref={ref} onKeyUp={(ev)=>{setTodo(ev.target.value)}}/>
            <button onClick={()=>addTodo(todo)}>Add Todo</button>
           <ul>
            {
                todos.map((todo,id)=>{
                    return <Todo todo={todo} id={id} key={todo} removeTodo={handleDelete}></Todo>
                })
            }
           </ul>
        </div>
    )
}
export default TodoList