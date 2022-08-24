import React from 'react'
import { Route, Routes } from 'react-router-dom'
import '../styles/Content.css'
import ApplicantsList from './ApplicantsList'
import SubmitResume from './SubmitResume'
import Results from './Results'

function Content() {
  return (
    <div className='Content-wrp'>
      <Routes>
        <Route path="" element={<SubmitResume/>}/> 
        <Route path="/results" element={<Results/>}/>
      </Routes>
     
    
    </div>
  )
}

export default Content
