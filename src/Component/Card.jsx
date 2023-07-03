import React from 'react'
import '../assets/Styles/Card.css'
import piggy from '../assets/Image/piggy.png'
import safelock from '../assets/Image/safelock.png'
import arrow1 from '../assets/Image/arrow1.png'
import target from '../assets/Image/target.png'
import flex from '../assets/Image/flex.png'
const Card =()=>{
    return (
        <>
        <div className="container mt-5">
        <div class="row">
        <div class="col-lg-4 col-sm-6">
        <h1>4 ways to build <br /> your savings</h1>
        <p>Earn 5%-15% when you save with any <br /> of these PiggyVest plans.</p>
        <button id='lighter' type="button" class="btn btn-secondary btn-lg mt-2">Start Saving</button>
    </div>
    <div id='see'><a href="" class="col-lg-4 col-sm-6  text-decoration-none">
        <img className='mt-4 ms-3' id='piggy' src={piggy} alt="" />
        <p id='auto' className='fw-bold mt-4'>Automated Savings</p>
        <p id='build'>Build a dedicated savings faster on <br /> your terms automatically or manually</p>
        <div id='arr'>
        <img id='arrow' src={arrow1} alt="" /> <span id='pi' className='ms-2'>Piggybank</span>
        </div>  
        </a>
    </div>

    <div className='ms-5' id='see'><a href="" class="col-lg-4 col-sm-6 text-decoration-none">
    <img className='mt-4 ms-3' id='life' src={safelock} alt="" />
    <p id='auto' className='fw-bold mt-4'>Fixed Savings</p>
    <p id='build'>Lock money away for a fixed duration<br /> with no access to it until maturity. it's <br />like having a custom fixed deposit</p>
    <div id='arr1'>
    <img id='arrow' src={arrow1} alt="" /> <span id='pi' className='ms-2'>Safelock</span>
    </div>
    </a>
</div>
</div>
</div>

 <div className="container mt-5">
        <div class="row">
        <div class="col-lg-4 col-sm-6">
    </div>
    <div id='see'><a href="" class="col-lg-4 col-sm-6  text-decoration-none">
        <img className='mt-4 ms-3' id='piggy' src={target} alt="" />
        <p id='auto' className='fw-bold mt-4'>Goal-oriented Savings</p>
        <p id='build'>Reach all your savings goals faster.<br /> Save towards multiple goals on your own or with a group.  your <br /> terms automatically or manually</p>
        <div id='arr2'>
        <img id='arrow' src={arrow1} alt="" /> <span id='pi' className='ms-2'>Target Savings</span>
        </div>
        </a>
    </div>

    <div className='ms-5' id='see'><a href="" class="col-lg-4 col-sm-6 text-decoration-none">
    <img className='mt-4 ms-3' id='life' src={flex} alt="" />
    <p id='auto' className='fw-bold mt-4'>Flexible Savings</p>
    <p id='build'>Save, transfer, withdraw, manage and <br /> organise your money for free at any br time.</p>
    <div id='arr11'>
    <img id='arrow' src={arrow1} alt="" /> <span id='pi' className='ms-2'>Flex Naira</span>
    </div>
    </a>
</div>
</div>
</div>

        </>
        )
    }
    
    export default Card