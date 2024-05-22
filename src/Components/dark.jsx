import React, { useState } from 'react'
// import './App.css'

function Dark() {

 const [isDarkTheme, setDarkTheme] = useState(false)

 const toggleTheme = () => {
 setDarkTheme(!isDarkTheme) }

 return (
 <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
     <h1>Todo List</h1>
  <button onClick={toggleTheme}>Toggle Theme</button>
  <p>{isDarkTheme ? 'Dark' : 'Light'}</p>
 </div>
 )
}

export default Dark