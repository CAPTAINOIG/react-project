import React from 'react'
import '../assets/styles/Piggyvest.css'
import logo from '../assets/Image/logo.svg'
import piggyvest from '../assets/Image/piggyvest.png'
import face from '../assets/Image/face.png'
import insta from '../assets/Image/insta.png'
import twit from '../assets/Image/twit.jpg'



const Piggyvest =()=>{
    return (
        <>
        <div className="container">
        <div className="row">
        <div className="col-lg-2">
        <img id='loogo' src={logo} alt="" />
        <img id='pig' src={piggyvest} alt="" className='card' />
        </div>
        <div id='loogo1' className="col-lg-2">
        <p className='fw-bold'>Products</p>
        <p>Piggybank</p>
        <p>Invest</p>
        <p>Safelock</p>
        <p>Target Savings</p>
        <p>Flex Naira</p>
        </div>
        <div id='loogo1' className="col-lg-1">
        <p className='fw-bold'>Company</p>
        <p>About</p>
        <p>FAQs</p>
        <p>Blog</p>
        </div>
        <div id='loogo1' className="col-lg-2">
        <p className='fw-bold'>Legal</p>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Security</p>
        </div>
        <div className="col-lg-3">
        <div className="d-flex">
        <a href=""><img id='face' src={face} alt="" />
        <img id='twit' src={twit} alt="" />
        <img id='insta' src={insta} alt="" />
        </a>
        </div>
        <a className='test' href=""><p id='tet'>Tesmot house, Abdulrahman Okene</p></a>
        <a className='test' href=""><p>close, Victoria Island, Lagos, Nigeria.</p></a>
        <a className='test' href=""><p>contact@piggyvest.com</p></a>
        <a className='test' href=""><p>+234 700 933 933 933</p></a>

        </div>
        </div>
        </div>
        </>
        )
    }
    
    export default Piggyvest