import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import WelcomePage from './components/WelcomePage/WelcomePage';
import AdminHomePage from './components/AdminHomePage/AdminHomepage';
import UserHomepage from './components/UserHomepage/UserHomepage';
import './App.css';

export const WHEELS_SHARE_SERVICE = 'http://172.20.10.4:8081/services/WheelsShareApp/api';
export const QUESTIONS_SERVICE = 'http://172.20.10.4:8082/services/QuestionsService/api';

const Welcome = () => (
    <WelcomePage/>
);

const AdminHome = () => (
    <AdminHomePage />
);

const UserHome = () => (
    <UserHomepage />
);

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Welcome}/>
                    <Route exact path="/admin" component={AdminHome} />
                    <Route exact path="/user" component={UserHome} />
                </div>
            </Router>
        );
    }
}

export default App;
