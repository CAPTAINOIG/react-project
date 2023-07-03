import React from 'react'
import '../assets/styles/Customers.css'
import apple from '../assets/Image/apple.png'
import play from '../assets/Image/play.png'
import oyin from '../assets/Image/oyin.jpeg'
import captain from '../assets/Image/captain.jpg'
const Customers =()=>{
    return (
        <>
        <div className="container">
        <div className="row">
        <div className="col-lg-6">
        <div id='one' className='d-flex rounded-5'>
        <p><img id='oyin' src={oyin} alt="" /></p> <span >Favour <br /><p>Piggyvest has helped me with discipline principles for saving. I'm grateful to come this far, thanks.!</p></span> <br />
        </div>
        <div className='d-flex'>
        <p><img id='oyin' src={captain} alt="" /></p> <span >CaptainOIG<br /><p>     Piggyvest has really helped me in the cause of my business, it has been amazing saving my money with them. I encourage you all to give them a trial by investing your money today, you will thank me later. I am a living testimony, no scam here!</p></span> <br />
        </div>
        <div className='d-flex'>
        <p><img id='oyin' src={oyin} alt="" /></p> <span >Juliana M <br /><p>     Piggyvest has really helped me in the cause of my business, it has been amazing saving my money with them. I encourage you all to give them a trial by investing your money today, you will thank me later. I am a living testimony, no scam here!</p></span> <br />
        </div>
        </div>
        <div className="col-lg-6">
        <h1>4 Million + customers</h1>
        <p>Since launching in 2016, over 4,000,000 people have <br /> used PiggyVest to manage their money better, avoid <br /> over-spending and be more accountable.</p>
        <button id='lighter' type="button" class="btn btn-secondary btn-lg">Create free account</button>
        <div className="d-flex mt-5">
       <a id='dark' className='text-decoration-none text-dark rounded' href=""><img id='apple' src={apple} alt=""></img><span className='ms-2'>Get on Iphone</span></a>
       <a id='darky' className='text-decoration-none text-dark rounded' href=""><img id='play' src={play} alt="" /><span>Get on Android</span></a>
        </div>
        </div>
        </div>
        </div>
        </>
        )
    }
    
    export default Customers