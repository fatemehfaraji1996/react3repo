import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todolist from './Components/todolist'
import Count from './Components/conter'
import Dark from './Components/dark'
function App() {
  return (
    <>
    <Count/>
    <Todolist/>
    <Dark/>
    </>
  )
 
}

export default App
