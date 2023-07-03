import React from 'react'
import '../assets/styles/Navbar.css'
import logo from '../assets/Image/logo.svg'
// import flex from '../assets/Image/flex.png'

const Navbar =()=>{
    return (
        <>
<nav id='static' className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
        <img src={logo} alt="" />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a className="navbar-brand mt-3 ms-4" href="#">
            Save
          </a>
          <a className="navbar-brand mt-3 ms-4" href="#">
            Invest
          </a>
          <a className="navbar-brand mt-3 ms-4" href="#">
            Stories
          </a>
          <a className="navbar-brand mt-3 ms-4" href="#">
            FAQS
          </a>
          <a className="navbar-brand mt-3 ms-4" href="#">
            Resources
          </a>
          <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search">
          <button id='light' type="button" className="btn mt-2">Sign in</button>
          <button id='lighter' type="button" class="btn btn-secondary btn-lg ms-3 mt-2">Create free account</button>
          </form>
        </div>
      </nav>
            </div>
          </div>
        </div>
      </nav>

    
        </>
        )
    }
    
    export default Navbar