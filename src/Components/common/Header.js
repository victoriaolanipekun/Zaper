import React from 'react'
import profile from '../../assets/profile.png'

const Header = () => {
  return (
    <div className='row header'>
      <div className='col-md-6'>
        <div className="input-group mb-3">
          <input type='text' name='search' placeholder='Search by name' className='form-control search' />
          <i className='fas fa-search search-icon'></i>
        </div>
      </div>
      <div className='col-md-6'>
        <div className='profile'>
          <img src={profile} className='profile_pic' />
          <span>Welcome Cecilia</span>
        </div>
      </div>
    </div>
  )
}

export default Header