import React from 'react'
import SignUpApp from '../Component/SignUpForm'
import {auth, createUserWithEmailAndPassword} from '../Config/FirbaseConfig';
import {useNavigate} from 'react-router-dom'

function SignUp() {
  const navigate = useNavigate();

  const sfun = (data) => {
    // console.log(data)
    createUserWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user.uid);
    navigate('/profile')
    // ...
  })
  .catch((error) => {
    console.log(error);
    // ..
  });
  }
  const asert = {
      display: 'flex',
      justify_content: 'center',
      align_items: 'center'
  }
return (
  <div style={{asert}}>
      <h1>SIGN UP</h1>
      <SignUpApp sfun = {sfun}/>
  </div>
)
}

export default SignUp