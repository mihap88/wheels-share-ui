import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import WelcomePage from './components/WelcomePage/WelcomePage';
import AdminHomePage from './components/AdminHomePage/AdminHomepage';
import UserHomepage from './components/UserHomepage/UserHomepage';
import AdminAddItem from './components/AdminAddItem/AdminAddItem';
import './App.css';

export const WHEELS_SHARE_SERVICE = 'http://192.168.0.134:8081/services/WheelsShareApp/api';
export const QUESTIONS_SERVICE = 'http://192.168.0.134:8082/services/QuestionsService/api';

const Welcome = () => (
    <WelcomePage/>
);

const AdminHome = () => (
    <AdminHomePage />
);

const UserHome = () => (
    <UserHomepage />
);

const AdminAddCar = () => (
    <AdminAddItem />
);

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Welcome}/>
                    <Route exact path="/admin" component={AdminHome} />
                    <Route exact path="/user" component={UserHome} />
                    <Route exact path="/admin/addCar" component={AdminAddCar}/>
                </div>
            </Router>
        );
    }
}

export default App;
