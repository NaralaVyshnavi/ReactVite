import React, { useEffect } from "react";
import { connect } from "react-redux";
import { dec, inc } from "./action";
function Counter(props){
    console.log(props)
    useEffect(()=>{
        console.log("counter Rendered")
    })
    return(
        <div className="myBox">
            <h1>Counter{props.count}</h1>
            <button onClick={()=>{
                props.dispatch(inc())
            }}>Increment</button>
            <button onClick={()=>{
                props.dispatch(dec())
            }}>Decrement</button>
        </div>
    )
}
export default connect(store=>store.counterReducer)(Counter)