import React,{useContext} from "react";
import MyContext from "./MyContext";
function C(){
    const [count,setCount]=useContext(MyContext);
    return(
        <div className="myBox">
            <h1>C Component</h1>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    )
}
export default C