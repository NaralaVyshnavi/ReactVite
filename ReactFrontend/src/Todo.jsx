import React  from "react";
function Todo({todo,id,removeTodo}){
    React.useEffect(()=>{
        console.log(todo+"rendered")
        return function(){
            console.log(todo+"delted"); 
        }
    })
    function handleDeleteTodo(){
        removeTodo(id);
    }
    return(
        <li>{todo} <button onClick={()=>{handleDeleteTodo()}}>Remove</button></li>
    )
}
export default React.memo(Todo)