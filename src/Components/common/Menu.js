import React from 'react'
import logo from '../../assets/Logo2.png'

const Menu = () => {

  return (
    <div>
      <div><img src={logo} className='logo'/></div>
      <div className='navigation'>
        <div className='menu-list'><i className='fas fa-th-large'></i> &nbsp;Dashboard</div>
        <div className='menu-list'><i className='fas fa-user-plus'></i> Create Employee</div>
        <div className='menu-list'><i className='fas fa-cog'></i> &nbsp;Settings</div>
        <div className='menu-list'><i className='fas fa-user'></i> &nbsp;My Profile</div>
      </div>
    </div>
  )
}

export default Menu