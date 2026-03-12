import React  from "react"
function UseCounter(){
    const [count,setCount]=React.useState(0);
    function incrementCount(){
        setCount(count+1);
    }
    function decrementCount(){
        setCount(count-1);
    }
    return [count,incrementCount,decrementCount]
}
export default UseCounter;