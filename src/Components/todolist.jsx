import React, { useState } from 'react';

function Todolist() {
    const [todos, setTodos] = useState([]);
 const [inputValue, setInputValue] = useState('');

 const handleInputChange = (e) => {
     setInputValue(e.target.value);
 };

 const handleAddTodo = () => {
     if (inputValue.trim() !== '') {
 setTodos([...todos, inputValue]);
  setInputValue('');
 }
 };

 const handleRemoveTodo = (index) => {
     const updatedTodos = todos.filter((_, i) => i !== index);
     setTodos(updatedTodos);
 };

 return (
     <div>
 <h1>Todo List</h1>
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

export default Todolist;