import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from '../reduxConfig/reducer/ReducerConfig';

function Todo() {
  const [text, setText] = useState("");
  const mytodos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addTodo({ title: text }));
    setText(""); // Clear input field after adding todo
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add Todo</button>
      <ul>
        {mytodos.map((todo) => 
          <li key={todo.id}>
            {todo.title}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Todo;
