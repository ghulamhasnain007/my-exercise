import { useState } from 'react'
// import './App.css'
import SelectionDemo from './pages/chart/Chart'
import AddForm from './components/EmployeeForm/AddForm'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <SelectionDemo/> */}
     {/* <AddForm/> */}
     <Dashboard/>
    </>
  )
}

export default App
