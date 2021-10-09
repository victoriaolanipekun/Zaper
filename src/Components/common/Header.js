import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div className="input-group mb-3">
        <input type='text' name='search' placeholder='Search by name' className='form-control search' />
        <i className='fas fa-search search-icon'></i>
      </div>
    </div>
  )
}

export default Header