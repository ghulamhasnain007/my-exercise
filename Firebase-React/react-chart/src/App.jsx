import { useState } from 'react'
// import './App.css'
import SelectionDemo from './pages/chart/Chart'
import AddForm from './components/EmployeeForm/AddForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <SelectionDemo/> */}
     <AddForm/>
    </>
  )
}

export default App
