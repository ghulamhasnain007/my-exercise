import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from '../Pages/Profile';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import {onAuthStateChanged, auth} from './FirbaseConfig';
import {Navigate} from 'react-router-dom';
import { Spin } from 'antd';

export default function Router() {

  const [user, setUser] = useState(false)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const uid = user.uid;
        console.log(uid)
        setUser(true)
        setLoader(false)
      } else {
        console.log('user not login')
        setUser(false)
      }
    });
  }, [])


  return (
    <>
    {
    loader ? 
    <Spin/>
    :
    <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <Navigate to={'/profile'}/> : <Login />} />
        <Route path='/signup' element={user ? <Navigate to={'/profile'}/> : <SignUp />} />
        <Route path='/profile' element={user ? <Profile /> : <Navigate to={'/'}/>} />
      </Routes>
    </BrowserRouter>

    }
    </>
  )
}
