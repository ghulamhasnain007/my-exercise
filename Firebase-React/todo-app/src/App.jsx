import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { addDoc, collection, onSnapshot, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from './config/firebaseConfig';
import TodoList from './components/TodoList';
// import { updateDoc } from 'firebase/firestore';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(-1)
  
  useEffect(()=>{
    const unsubscribe = onSnapshot(collection(db, 'todos'), (snapshot)=>{
      setTodos(snapshot.docs.map((data)=> ({id: data.id, todo: data.data().todo})))
    })
    return() => unsubscribe();
  },[])
  const setEdit = (index)=>{
      setInput(todos[index].todo)
      setEditIndex(index)
  }
  const addTodo = async() => {
    try {
      if (input.trim() !== '') {
        // setTodos([...todos, { id: new Date(), todo: input }]);
        await addDoc(collection(db, 'todos'), {todo: input})
        setInput('');
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const updateTodo = async()=>{
    try {
      if(input.trim() != ''){
        // const updatedTodo = [...todos]
        // updatedTodo[editIndex].todo = input
        // setTodos(updatedTodo)
        const todoDocRef = doc(db, 'todos', todos[editIndex].id)
        await updateDoc(todoDocRef, {todo: input})
        setEditIndex(-1)
        setInput('')
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  const removeTodo = async(id) =>{
    // const filteredTodos = (todos.filter((todo)=> todo.id != id))
    // setTodos(filteredTodos)
    try{
      await deleteDoc(doc(db, 'todos', id))
    }catch(error){
      console.log(error.message);
    }
  }
  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4 p-4 bg-custom-background bg-center bg-cover'>
      <div className='bg-gray-100 w-full p-6 rounded shadow-md max-w-lg lg:w-1/2'>
        <h1 className='text-3xl font-bold text-center mb-4'>Todo App</h1>
        <div className='flex'>
          <input
            type='text'
            placeholder='Add Todo'
            className='py-2 px-4 w-full rounded border focus:outline-none mr-2'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={editIndex=== -1 ? addTodo : updateTodo} className='bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded' >
            {editIndex === -1 ? <FaPlus />: <FaPencilAlt/>}
          </button>
        </div>
      </div>
    {todos.length > 0 &&(

      <TodoList todos={todos} setEdit={setEdit} removeTodo={removeTodo}/>
    )}
    </div>
  );
}

export default App;
// export {setEdit, removeTodo}