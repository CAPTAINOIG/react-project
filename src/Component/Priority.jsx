import React from 'react'
import '../assets/Styles/Priority.css'
import security from '../assets/Image/security.png'


const Priority =()=>{
    return (
        <>
        <div id='container' className="container">
        <div className="row">
        <div className="col-lg-3">
        </div>
        <div className="col-lg-9">
        <div id='imas' className='d-flex'>
        <div ><img id='image' src={security} alt="" />
        </div>
        <div>
        <h2 id='security' className='fw-bold ms-5'>Your security is our priority</h2>
        <p id='use' className='ms-5'>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security <br /> encryption to ensure that your information is comepletely protected from fraud.</p>
        <a className='text-primary fw-bold ms-5 text-decoration-none fs-5' href="">Learn more  </a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
        )
    }
    
    export default Priority