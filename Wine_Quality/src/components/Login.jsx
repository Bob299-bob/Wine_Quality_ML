import React from 'react'
import './signUp.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'
function Login() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const handleLogin=async(e)=>{
    e.preventDefault();
   const res = await fetch('http://localhost:2000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, pass })
    });

    const data = await res.json();
    console.log(data);

    if (data.message === "Login Success") {
      alert("Login Successful");
    } else {
      alert("Invalid Credentials");
    }
  }
  return (
    <div>
        <Header/>
    <form className='sign' onSubmit={handleLogin}>
        <div><h1>Login</h1></div>
        <div>Enter Email Address</div>
        <div><input type='email' onChange={(e)=>setEmail(e.target.value)}/></div>
        <div>Enter password</div>
        <div><input type='password' onChange={(e)=>setPass(e.target.value)}/></div>
        <div><input type='submit' value='Submit'/></div>
        <div>For New User</div>
        <div><Link to='/signUp' id='col'>Register Here</Link></div>
    </form>
    </div>
  )
}

export default Login