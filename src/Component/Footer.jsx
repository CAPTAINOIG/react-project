import React from 'react'
import '../assets/Styles/Footer.css'




const Footer =()=>{
    return (
        <>
        <div className=' rounded text-light' id='text'>
        <h5 id='cookie'>Cookie Notification</h5>
        <div className='d-flex'>
        <p id='data'>This website uses cookies to optimize your experience and to provide us insight on how to <br />
        interact with the site. All information shared with us through cookies are secure and covered <br />
        by our data privacy obligations. You can access our Privacy Policy <a className='text-decoration-none' href="">here</a> </p>
        <div>
        <a id='dec' href="">Decline</a>
        <button className='btn btn-light' id='accept'>Accept</button>
        </div>
        </div>
        </div>
        <div className=" text-center" id='foot'>
        <p>Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 6 years, our <br /> customers have saved and invested billions of Naira that they would normally be tempted to spend.</p>
        <a className='text-decoration-none' href="">2016 - 2023 PiggyTech Global Limited - RC 1405222</a>
        </div>
        </>
        )
    }
    
    export default Footer

    