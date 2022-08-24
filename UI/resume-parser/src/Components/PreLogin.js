import React from 'react' 
import { Link } from 'react-router-dom'
import "../Login.css" 

function PreLogin({component:Component,redirect:Redirect}) {  
  return (
    <div className='auth-wrap'>
      <div id="col1"> 
          {Component}
          
      </div>
      <div id="col2"><div class="redirect"> 
      {Redirect}
        </div></div>
    </div>
  )
}

export default PreLogin