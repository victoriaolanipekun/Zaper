import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/Logo2.png'

const Menu = () => {

  return (
    <>
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse">
        <Link to='/manager' className=""><img src={logo} className='logo showDesktop'/></Link>
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <span data-feather="home"></span>
                <Link to='/manager'><i className='fas fa-th-large'></i> &nbsp;Dashboard</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="file"></span>
                <i className='fas fa-user-plus'></i> <a href='#' role="button" data-toggle='modal' data-target='#createModal'>Create Employee</a>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="shopping-cart"></span>
                <i className='fas fa-cog'></i> &nbsp;Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span data-feather="users"></span>
                <i className='fas fa-user'></i> &nbsp;My Profile
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Menu