import React from 'react'
import './signUp.css'
import { Link } from 'react-router-dom'
import Header from './Header'
import { useState } from 'react'
function signUp() {
  const  [email,setEmail]=useState("")
  const [pass,setPass]=useState("")

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const res=await fetch('http://localhost:2000/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({email,pass})
    });
    const data=await res.json();
    console.log(data);
    alert('Registered successfully')
  }
  return (
    <div>  
      <Header/> 
        <form className='sign' onSubmit={handleSubmit}>
            <div><h1>SignUp</h1></div>
            <div>Enter User Name</div>
            <div><input type='text' id='Name'/></div>
            <div>Create password</div>
            <div><input type='password' onChange={(e)=>setPass(e.target.value)}/></div>
            <div>Enter Contact Number</div>
            <div><input type='number' id='Num'/></div>
            <div>Enter Email Address</div>
            <div><input type='email' id='Email' onChange={(e)=>setEmail(e.target.value)}/></div>
            <div><input type='submit' value='Submit'/></div>
            <div>Registered Already...?</div>
            <div><Link to='/Login' id='col'>Login Here</Link></div>
        </form>
    </div>
  )
}

export default signUp