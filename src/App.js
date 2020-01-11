import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import './App.css';

const Home = () => (
  <HomePage />
);

const Login = () => (
  <LoginPage />
);

const Welcome = () => (
    <WelcomePage />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
