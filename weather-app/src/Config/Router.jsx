import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from '../App'
import History from '../Component/History/History'

function Router() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/History' element={<History/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router