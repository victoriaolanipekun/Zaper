import React from 'react'
import { Link } from 'react-router-dom'

import Nav from '../common/Nav'

const Login = () => {

  return (
    <div className='container-fluid login'>
      <Nav/>
      <div className='row log'>
        <div className='col-md-3'>
          <div className='styling'></div>
          <div className='bottomStyling'></div>
        </div>
        <div className='col-md-6 start'>
          <div className='getStarted'>
            <h3>Log in</h3>
            <div className='google'>
              <button className="btn" type="button">Log in With Google</button>
              <div className='email'><hr/>Or, Log in with your email</div>
              <div className='formInput'>
                <input type='text' name='name' className='form-control' placeholder='Email' value='' />
                <input type='text' name='salary' className='form-control' placeholder='Password' value=''/>
                <h5>
                  <a href="#">Forgot Password?</a>
                </h5>
              </div>
              <Link to='/manager'><button className="log_btn" type="button">Log in</button></Link>
            </div>
            <h4>
              Don’t have a Zaper account? <Link to='/register'>Sign up Here</Link>
            </h4>
          </div>
        </div>
        <div className='col-md-3'></div>
      </div>
    </div>  
  )
}

export default Login