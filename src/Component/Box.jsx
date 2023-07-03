import React from 'react'
import '../assets/Styles/Box.css'
import rect from '../assets/Image/rect.png'
import card1 from '../assets/Image/card1.png'
import card2 from '../assets/Image/card2.png'
import omo from '../assets/Image/omo.png'
import apple from '../assets/Image/apple.png'
import play from '../assets/Image/play.png'

const Box =()=>{
    return (
        <>
        <div className="container">
        <div className="row">
        <div className="col-lg-8">
        <h1 className='way'>The Better Way <br /> to Save & Invest.</h1>
        <p id='piggy'>PiggyVest helps over 4 million customers achieve their financial <br /> goals by helping them save and invest with ease.</p>
        <button id='lighter' type="button" class="btn btn-secondary btn-lg">Create free account</button>
        <div className="d-flex mt-5">
       <a id='dark' className='text-decoration-none text-dark rounded' href=""><img id='apple' src={apple} alt=""></img><span className='ms-2'>Get on Iphone</span></a>
       <a id='darky' className='text-decoration-none text-dark rounded' href=""><img id='play' src={play} alt="" /><span>Get on Android</span></a>
        </div>
        </div>
        <div className="col-lg-4">
        <img className='img-fluid' id='rect' src={rect} alt="" />
        <img className='img-fluid' id='card' src={card1} alt="" />
        <img className='img-fluid' id='cardy' src={card2} alt="" />
        <img className='img-fluid' id='omo' src={omo} alt="" />zz
        </div>
        </div>
        </div>
        </>
        )
    }
    
    export default Box