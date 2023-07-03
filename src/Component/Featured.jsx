import React from 'react'
import '../assets/styles/Featured.css'
import tech from '../assets/Image/tech.png'
import guard from '../assets/Image/guard.png'
import crunch from '../assets/Image/crunch.png'



const Featured =()=>{
    return (
        <>
        <div id='fit' className="container-fluid  my-4 ">
        <div className="row">
        <div className="col-lg-5 ">
        <h2 id='feat'>As featured in</h2>
        </div>
        <div className="col-lg-2">
        <img id='tech' src={tech} alt="" />
        </div>
        <div className="col-lg-2">
        <img id='guard' src={guard} alt="" />
        </div>
        <div className="col-lg-3">
        <img id='crunch' src={crunch} alt="" />
        </div>
        </div>
        </div>
        </>
        )
    }
    
    export default Featured