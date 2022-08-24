import React from 'react';
import "../Styles.css";
import "../styles/header.css"
import { useNavigate } from 'react-router-dom';

function Header() {
  const nav = useNavigate()
  function clearData(){
    localStorage.clear();
    nav("/Login")
  }
  return (
    <nav className='header-wrp flex-display'>
      <div className='left-wrp'>
        <div className='title'>Resume Parser</div>
        </div> 
      <div className='right-wrp flex-display'>  
        <div onClick={clearData}>Logout</div>
      </div> 
    </nav>
  )
}

export default Header
