import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos, setEdit, removeTodo}) {
  return (
    <div className='bg-gray-100 p-6 rounded shadow-md max-w-lg lg:w-1/2'>
        <ul>
          {todos.map((data, index) => (
            <TodoItem data={data} index={index} key={index} setEdit={setEdit} removeTodo={removeTodo}/>
          ))}
        </ul>
      </div>
  )
}

export default TodoList