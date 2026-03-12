import React from "react";
import UseCounter from "./UseCounter";
function Counter(){
    const [count,inc,dec]=UseCounter();
    return(
        <div className="myBox">
            <h1>Count:{count}</h1>
            <button onClick={()=>inc()}>Increment</button>
            <button onClick={()=>{dec()}}>Decrement</button>
        </div>
    )

}
export default Counter