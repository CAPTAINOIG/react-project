import React from 'react'
import '../assets/styles/Access.css'
import invest from '../assets/Image/invest.png'

const Access =()=>{
    return (
        <>
        <div className="container mt-5 my-4">
        <div className="row">
        <div className="col-lg-6">
        <img id='invest' src={invest} alt="" />
        </div>
        <div className="col-lg-6">
        <p id='up' className='rounded-5'>Up To 25% Returns</p>
        <h1 id='access'>Access investment <br /> opportunities</h1>
        <p id='fo'>Invest securely and confidently on the go. Grow your <br /> money confidently by investing  in pre-vetted investment <br /> opportunities.</p>
        <a id='lear' href="">Learn more about Investments </a>
        </div>
        </div>
        </div>
        </>
        )
    }
    
    export default Access