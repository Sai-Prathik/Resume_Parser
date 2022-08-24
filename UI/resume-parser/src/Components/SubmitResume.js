import React from 'react'
import "../styles/Content.css"
import ApplicantsList from './ApplicantsList'

function SubmitResume() {
  return (
    <>
    <div className='upld-crd-wrp'>
    <div className='upld-crd'> 
    <div className='col1'> 
    <input type="file" accept='application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document'/>
    <button>Analyze Resume</button>
       
    </div>
    <div className='col2'>
    <input className='searchBar'/>
        <button>Search</button>
    </div>
    </div>   
    </div> 
    <ApplicantsList/>
    </>
  )
}

export default SubmitResume
