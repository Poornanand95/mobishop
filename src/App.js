import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import AddItems from './pages/AddItems';
import fire from './config/fire';

import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div className='app-body'>
        {this.state.user ? (
          <Router>
            <Navbar />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/AddItems' exact component={AddItems} />
            </Switch>
          </Router>
        ) : (
          <Router>
            <SignIn />
            <Switch>
              <Route path='/SignUp' exact component={SignUp} />
            </Switch>
          </Router>
        )}
      </div>
    );
  }
}

export default App;
