import React from 'react'
import { Link } from 'react-router-dom'

import Nav from '../common/Nav'
import quotes from '../../assets/Quotes.png'

const Onboarding = () => {

  return (
    <div className='container-fluid onboarding'>
      <Nav/>
      <div className='row questionnaire'>
        <div className='col-md-3'></div>
        <div className='col-md-6 team'>
          <div className='member'>
            <h4>Are you an HR manager or a team member?</h4>
            <div className='btn'>
              <Link to='/register'><button>Yes! I’m an HR manager</button></Link>
              <a href='#'><button>Yes! I’m a team member</button></a>
            </div>
          </div>
        </div>
        <div className='col-md-3'></div>
      </div>
      <div className='testimonial'>
        <div className='quote'>
          <img src={quotes} className='img img-responsive quote_img' />
        </div>
        <h4>
          If it wasn’t for Zaper, onboarding and managing employees would have been a hassle. Zaper has been such a great investment as a team.
          <br/>- HR @BOBOS
        </h4>
      </div>
    </div>  
  )
}

export default Onboarding