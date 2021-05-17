import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../components/css/SignIn.css';

function SignIn() {
  return (
    <Fragment>
      <div className='signin-form-container'>
        <form className='signin-form'>
          <div className='signin-label-input'>
            <label for='admin-name'>Admin name:</label>
            <input type='text' id='admin-name' />
          </div>
          <div className='signin-label-input'>
            <label for='password'>Password:</label>
            <input type='text' id='password' />
          </div>
          <div className='signin-signup-wrapper'>
            <div className='signin-label-input'>
              <input
                className='sign-in-btn btn'
                type='submit'
                value='Sign In'
              />
            </div>
            <Link to='/SignUp' className='signin-label-input'>
              <input
                className='sign-up-btn btn'
                type='submit'
                value='Sign Up'
              />
            </Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default SignIn;
