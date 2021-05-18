import { Fragment } from 'react';
import '../components/css/SignUp.css';
import fire from '../config/fire';

import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
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
              <label for='admin-email'>Email:</label>
              <input
                name='email'
                type='email'
                id='admin-email'
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
            <div className='signup-label-input'>
              <label for='password'>Password:</label>
              <input
                name='password'
                type='password'
                id='password'
                placeholder='enter password'
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <div className='signup-signup-wrapper'>
              <div className='signup-label-input'>
                <input
                  className='sign-up-btn btn'
                  type='submit'
                  value='Sign Up'
                  onClick={this.signup}
                />
              </div>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}
export default SignUp;
