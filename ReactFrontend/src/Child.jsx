import React from "react";
function Child({childRef,parentRef}){
    function handleFocus(ev){
        if(ev.key=="Enter"){
            parentRef.current.focus();
        }
    }
    return(
        <div className="myBox">
            <h1>Child</h1>
            <input type="text" ref={childRef} onKeyUp={(ev)=>handleFocus(ev)} />
        </div>
    )
}
export default Child