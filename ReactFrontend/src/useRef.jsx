import React from "react"
import Child from "./Child.jsx"
function UseRef(){
    const ref1=React.useRef();
    const ref2=React.useRef();
    const childRef=React.useRef();
    const ref3=React.useRef();
    React.useEffect(()=>{
        ref1.current.focus();
    })
    function handleFocus(ev){
        if(ev.key=="Enter"){
            ref2.current.focus();
        }
    }
    function handleChildFocus(ev){
        if(ev.key=="Enter"){
            childRef.current.focus();
        }
    }
    return(
        <div className="myBox">
            <h1>Parent</h1>
            <input type="text"   ref={ref1} onKeyUp={(ev)=>handleFocus(ev)}/>
            <br/>
            <input type="text" ref={ref2}   onKeyUp={(ev)=>handleChildFocus(ev)}/>
            <Child childRef={childRef} parentRef={ref3}/>
            <input type="text" ref={ref3} />
        </div>
    )
}
export default UseRef;