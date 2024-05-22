import React, { useState } from 'react'
// import './App.css'

function Dark() {
 const [todos, setTodos] = useState([])
 const [inputValue, setInputValue] = useState('')
 const [isDarkTheme, setDarkTheme] = useState(false)

 const handleInputChange = (e) => {
 setInputValue(e.target.value)
 };

 const handleAddTodo = () => {
 if (inputValue.trim() !== '') {
     setTodos([...todos, inputValue])
     setInputValue('');
 }
 };

 const handleRemoveTodo = (index) => {
 const updatedTodos = todos.filter((_, i) => i !== index)
 setTodos(updatedTodos);
 };
 const toggleTheme = () => {
 setDarkTheme(!isDarkTheme) };

 return (
 <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
     <h1>Todo List</h1>
  <button onClick={toggleTheme}>Toggle Theme</button>
  <p>{isDarkTheme ? 'Dark' : 'Light'}</p>
  <input type="text" value={inputValue} onChange={handleInputChange} />
  <button onClick={handleAddTodo}>Add Todo</button>
  <ul>
 {todos.map((todo, index) => (
 <li key={index}>
 {todo}
 <button onClick={() => handleRemoveTodo(index)}>Remove</button>
 </li>
 ))}
 </ul>
 </div>
 );
}

export default Dark