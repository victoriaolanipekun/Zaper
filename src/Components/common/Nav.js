import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png'

const Nav = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className='col-2'>
          <Link to='/' className="navbar-brand"><img src={logo} className='logo'/></Link>
        </div>  
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='col-10 menu'>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='col-6'>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Product</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Enterprise</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#">
                    Resources
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
              </ul>
            </div>
            <div className='col-6'>
              <div className="d-flex float-right">
                <Link to='/login' className="nav-link active" aria-current="page">Login</Link>
                <Link to='/onboarding'><button className="btn register" type="button">Try for free</button></Link>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav