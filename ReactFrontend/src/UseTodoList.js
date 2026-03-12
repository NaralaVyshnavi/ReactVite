import React  from "react";
function UseTodoList(){
    const [todos,setTodos]=React.useState([]);
    function addTodo(todo){
        setTodos((todos)=>{
            todos.push(todo);
            return [...todos];
        })
    }
        function removeTodo(id){
            setTodos((todos)=>{
                todos.splice(id,1);
                return [...todos]
            })
        }
    
    return [todos,addTodo,removeTodo]
}
export default UseTodoList;