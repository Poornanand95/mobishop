import { Link } from 'react-router-dom';
import '../components/css/SignIn.css';

import React, { Component, Fragment } from 'react';
import fire from '../config/fire';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <Fragment>
        <div className='signin-form-container'>
          <form className='signin-form'>
            <div className='signin-label-input'>
              <label for='admin-email'>Email:</label>
              <input
                name='email'
                type='email'
                id='admin-email'
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
            <div className='signin-label-input'>
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
            <div className='signin-signup-wrapper'>
              <div className='signin-label-input'>
                <input
                  className='sign-in-btn btn'
                  type='submit'
                  value='Sign In'
                  onClick={this.login}
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
}

export default SignIn;
