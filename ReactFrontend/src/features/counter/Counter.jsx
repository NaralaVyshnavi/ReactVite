import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "./counterSlice";
function Counter(){

    const {count}= useSelector(state=>state.counterReducer);
    const dispatch=useDispatch();
    return(
        <div className="myBox">
            <h1>Count:{count}</h1>
            <button onClick={()=>{
                dispatch(inc())
            }}>Increment</button>
            <button onClick={()=>{
                dispatch(dec())
            }}>Decrement</button>
        </div>
    )
}
export default Counter