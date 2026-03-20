import React, { useReducer }  from "react";
function Counter(){
    function counterReducer(state,action){
        if(action.type=="INC"){
           return {count:state.count+1}

        }
        if(action.type=="DEC"){
          return  {count:state.count-1}
        }
    }
    const [state,dispatch]=useReducer(counterReducer,{count:0})
    return(
        <div className="myBox">
            <h1>Count{state.count}</h1>
            <button onClick={()=>{
                dispatch({type:"INC"});
            }}>Increment</button>
            <button onClick={()=>{
                dispatch({type:"DEC"})
            }}>Decrement</button>
        </div>
    )
}
export default Counter