import React from 'react'
import LogInApp from '../Component/LoginForm';
import {auth, signInWithEmailAndPassword} from '../Config/FirbaseConfig';
import {useNavigate} from 'react-router-dom'

function Login() {
    const navigate = useNavigate();

    const lfun = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user.uid)
            alert("Log in Successfull")
            navigate('/profile')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    const asert = {
        display: 'flex',
        justify_content: 'center',
        align_items: 'center'
    }
  return (
    <div style={{asert}}>
        <h1>LOG IN</h1>
        <LogInApp lfun={lfun}/>
    </div>
  )
}

export default Login