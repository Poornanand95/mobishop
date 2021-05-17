import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className='app-body'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/SignIn' exact component={SignIn} />
          <Route path='/SignUp' exact component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
