import React from"react"; 
// import '..src/Counter.css'
function Counter(){
    const [count,setCount]=React.useState(0);
    function incrementCount(){
        setCount(count+1);
    }
    function decrementCount(){
        setCount(count-1);
    }
    return(
        <div className="counterBox">
            <h1>Counter:{count}</h1>
            <button onClick={()=>{incrementCount()}}>+</button>
            <button onClick={()=>{decrementCount()}}>-</button>
        </div>
    )
}
export default Counter;