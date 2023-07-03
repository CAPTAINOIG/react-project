import React from 'react'
import '../assets/styles/Saver.css'
import awilo from '../assets/Image/awilo.jpg'
import arrow1 from '../assets/Image/arrow1.png'
const Saver =()=>{
    return (
        <>
        <div className="container-fluid my-5 bg-primary">
        <div className="row">
        <div className="col-lg-7 ">
        <h1 id='meet' className=''>Meet the saver of <br /> the month!</h1>
        <p id='met'>Every month, we shine a spotlight on one saver, asking <br /> them questions about their savings culture and how the <br /> product is specifically helping them shape how they spend <br /> and save for future responsibilities.</p>
        <div id='arrz'>
        <img id='arrow' src={arrow1} alt="" /> <span id='piz' className='fw-bold'>Meet The Soile’s</span>
        </div>
        </div>
        <div className="col-lg-5">
        <img id='awilo' src={awilo} alt="" />
        </div>
        </div>
        </div>
        </>
        )
    }
    
    export default Saver