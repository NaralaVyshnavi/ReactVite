import { useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter  from './counter'
import Todolist from './Todolist'

function App() {
;  return ( 
      <>
        <Counter/>
        <Todolist/>
      </>
  
  )
}

export default App
