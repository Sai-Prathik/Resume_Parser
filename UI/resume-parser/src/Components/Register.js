import React, { useRef, useState } from 'react'
import PreLogin from './PreLogin'
import {Link, useNavigate} from 'react-router-dom'
import {AuthRegister,AuthCheckUser} from "../API"
import axios from 'axios'

function Register() {
 const [isValidPage,setValidFlag] = useState(true)
 const hist = useNavigate()
 const FirstName = useRef(null)
 const LastName = useRef(null)
 const UserName = useRef(null)
 const Password = useRef(null)
 const CPassword = useRef(null)
 const cpmsg = useRef(null)
 const unmsg = useRef(null)

 

 const Authregister= async()=>{
  const response =  await axios.get(AuthRegister(FirstName.current.value,LastName.current.value,UserName.current.value,Password.current.value))
  if(response.status===200){
    if(response.data.register_status){
      
      hist("/Login")
    }
    else{
      alert("Registration Failed");
    }

 }}


 const searchUserName= async ()=>{
  var username = UserName.current.value
  if(username.length>0){
    const res = await axios.get(AuthCheckUser(username)) 
    if(res.status===200){
      if(res.data.status==0){
        unmsg.current.innerHTML=res.data.Message  
        unmsg.current.className="alert alert-danger";
        
      }
      else{ 
        unmsg.current.innerHTML="" 
        unmsg.current.className="";
      }
    }
  }
  else{
    unmsg.current.innerHTML="" 
    unmsg.current.className="";
  }


 }


const checkPassword = async()=>{
  var cp = CPassword.current.value
  if(cp.length>0){
    if(cp==Password.current.value){ 
      cpmsg.current.innerHTML ="Password Matched"
      cpmsg.current.className="alert alert-success";
    } 
    else{ 
      cpmsg.current.innerHTML ="Password not matched";
      cpmsg.current.className="alert alert-danger";
    }
  }
  else{ 
    cpmsg.current.innerHTML =" "
    cpmsg.current.className="";
  }
  
}


  var register = <div className='login-wrap'>
  <div><h1>Register</h1></div> 
  <div className='form-wrp'>
   <div ><input className='input-field input-group input-group-lg' required ref={FirstName} placeholder='First Name'/></div>
   <div><input className='input-field input-group input-group-lg' ref={LastName} placeholder='Last Name'/></div>
   <div><input className='input-field input-group input-group-lg' ref={UserName} autoComplete='off' onChange={searchUserName} placeholder='User Name'/></div> 
   <div role="alert" ref={unmsg}></div>
   <div><input className='input-field input-group input-group-lg' type="password" autoComplete='off' ref={Password}  placeholder='Password'/></div> 
   <div><input className='input-field input-group input-group-lg' type="password" ref={CPassword} onChange={checkPassword} placeholder='Confirm Password'/></div>
   <div role="alert" ref={cpmsg}></div>
  <button className='btn btn-primary auth-btn' onClick={Authregister}>Register</button>

  </div>
 
</div>
var redirect = <><span>Already Registered?</span> <Link to="/Login" className='redirectLink'>Login</Link></>
  return ( 
    <PreLogin component={register} redirect={redirect}/> 
  )
}

export default Register
