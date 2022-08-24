import React from 'react'
import {Route,Navigate} from 'react-router-dom'

function PrivateRoute({component:Component}) {
     
  return (
    localStorage.getItem("username")!=null?(Component):(<Navigate to='/Login'/>)
  )
}

export default PrivateRoute
