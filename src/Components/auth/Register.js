import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../common/Nav'

const Register = () => {

  return (
    <div className='container-fluid registration'>
      <Nav/>
      <div className='row signup'>
        <div className='col-md-3'>
          <div className='styling'></div>
          <div className='bottomStyling'></div>
        </div>
        <div className='col-md-6 start'>
          <div className='getStarted'>
            <h3>Get started</h3>
            <div className='google'>
              <button className="btn" type="button">Sign up With Google</button>
              <div className='email'><hr/>Or, Sign up with your email</div>
              <div className='formInput'>
                <div className='input'>
                  <input type='text' name='first_name' className='form-control' placeholder='First Name' />
                  <input type='text' name='last_name' className='form-control' placeholder='Last Name' />
                </div>
                <input type='email' name='email' className='form-control' placeholder='Work Email' />
                <input type='text' name='website' className='form-control' placeholder='Company Website' />
                <input type='password' name='password' className='form-control' placeholder='Password' />
              </div>
              <Link to='/login'><button className="signup_btn" type="button">Sign up</button></Link>
            </div>
            <h4>
              Already have a Zaper account? <Link to='/login'>Log in</Link>
            </h4>
            <div className='terms'>
              <h4>
                By signing up you agree to our <span><a href="#">terms & conditions</a></span>
              </h4>
            </div>
          </div>
        </div>
        <div className='col-md-3'></div>
      </div>
    </div>  
  )
}

export default Register