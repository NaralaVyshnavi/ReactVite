import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './features/counter/Counter'
import Todolist from './features/todolist/Todolist'
import LikeDislike from './features/likeDislike/LikeDislike'

function App() {
 
  return (
    <div className='myBox'> 
    <Counter></Counter>
    <Todolist></Todolist>
    <LikeDislike></LikeDislike>
    </div>
 
  )
}

export default App
