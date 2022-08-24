import React, { useEffect, useState } from 'react'
import { Link,Navigate,useNavigate } from 'react-router-dom'
import "../Login.css" 
import PreLogin from './PreLogin'
import axios from 'axios'
import {AuthLogin} from '../API'
import { useRef } from 'react'






function Login() {

  const userN = useRef(null)
  const pwd = useRef(null) 
  const hist= useNavigate()

  const authenticate_user = async()=>{     
    const response =  await axios.get(AuthLogin(userN.current.value,pwd.current.value))
    if(response.status===200){
      if(response.data.login_status){
        localStorage.setItem("username",response.data.username)
        localStorage.setItem("firstName",response.data.FirstName)
        localStorage.setItem("lastName",response.data.LastName)   
        hist("/")
      }
      else{
        alert("Login Failed");
      }
    }

  
    
  }

  
  


  var login = <div className='login-wrap'>
    <div><h1>Login</h1></div> 
    <div className='form-wrp'>
     <div ><input className='input-field input-group input-group-lg' autoComplete='off' ref={userN} placeholder='Username'/></div>
     <div><input className='input-field input-group input-group-lg' autoComplete='off' type="password" ref={pwd} placeholder='Password'/></div>
    
    <button className='btn btn-primary auth-btn' onClick={authenticate_user}>Login</button>
 
    </div>
   
  </div>
 var redirect = <><span>Not a User?</span> <Link to="/Register" className='redirectLink'>Register</Link></>
  return ( 
    <PreLogin component={login} redirect={redirect}/> 
  )
}

export default Login
