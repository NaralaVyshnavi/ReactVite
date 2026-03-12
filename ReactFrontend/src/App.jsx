import { useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import A from './A'
import MyContext  from './MyContext'
function App() {
  const [count,setCount]=useState(0)
;  return ( 
      <MyContext.Provider value={[count,setCount]}>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        < A/>
      </MyContext.Provider>
  
  )
}

export default App
