import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import WelcomePage from './components/WelcomePage/WelcomePage';
import AdminHomePage from './components/AdminHomePage/AdminHomepage';
import HomeUserPage from './components/HomeUserPage/HomeUserPage';
import './App.css';

const Welcome = () => (
    <WelcomePage/>
);

const AdminHome = () => (
    <AdminHomePage />
);

const UserHome = () => (
    <HomeUserPage />
);

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/admin" component={AdminHome} />
                    <Route path="/user" component={UserHome} />
                </div>
            </Router>
        );
    }
}

export default App;
