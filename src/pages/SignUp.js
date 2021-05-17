import React from 'react';
import { Fragment } from 'react';
import '../components/css/SignUp.css';

function SignUp() {
  return (
    <Fragment>
      <div className='signup-form-container'>
        <form className='signup-form'>
          <div className='signup-label-input'>
            <label for='admin-fname'>Admin first name:</label>
            <input type='text' id='admin-fname' />
          </div>
          <div className='signup-label-input'>
            <label for='admin-lname'>Admin last name:</label>
            <input type='text' id='admin-lname' />
          </div>
          <div className='signup-label-input'>
            <label for='password'>Password:</label>
            <input type='text' id='password' />
          </div>
          <div className='signup-signup-wrapper'>
            <div className='signup-label-input'>
              <input
                className='sign-up-btn btn'
                type='submit'
                value='Sign Up'
              />
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default SignUp;
