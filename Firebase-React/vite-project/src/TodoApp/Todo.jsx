import React from 'react'
import { useState } from 'react';

function Todo() {
    const [input, setInput] = useState('');
      const [todos, setTodos] = useState([]);
    
      const addTodo = () => {
        setTodos([...todos, input]);
        setInput('');
      };
    
      const editBtn = (index) =>{
        const editVal = prompt("Enter Edit Value");
        if (editVal !== null) {
          const updatedTodos = [...todos];
          updatedTodos[index] = editVal;
          setTodos(updatedTodos);
        }
        setInput('');
      };
      const deleteBtn = (index) => {
        const deletedTodo = todos.filter((_, i) => i !== index);
        setTodos(deletedTodo);
      };
      return (
        <>
          <div>
            <input type='text' placeholder='Enter Todo' value={input} onChange={(e)=> setInput(e.target.value)}/>
            <button onClick={()=> addTodo()}>ADD</button>
          </div>
          <div>
            <ul>
              {
                todos.map((data, index)=>{
                  return(
                    <li key={index}>
                      {data}
                      <button onClick={()=>editBtn(index)}>Edit</button>
                      <button onClick={()=>deleteBtn(index)}>Delete</button>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </>
      )
}

export default Todo