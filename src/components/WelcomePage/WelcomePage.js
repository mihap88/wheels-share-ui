import React, {Component} from 'react';
import axios from 'axios';
import './WelcomePage.css';

import {withRouter} from "react-router-dom";

class WelcomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            surname: '',
            password: ''
        }
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    handleSurname = (e) => {
        this.setState({
            surname: e.target.value
        })
    };

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    handleLogin = (e) => {
        e.preventDefault();

        const url = '';
        const postData = {
            email: this.state.email,
            password: this.state.password
        };

        axios.post(url, postData)
            .then(() => {

            })
            .catch(() => {

            });

        this.props.history.push('/admin');
    };

    handleSignup = (e) => {
        e.preventDefault();
        const url = 'http://192.168.0.134:8081/services/WheelsShareApp/api' + '/snUp';
        const postData = {
            emailAddress: this.state.email,
            password: this.state.password,
            firstName: this.state.name,
            lastName: this.state.surname,
            adminRights: false
        };

        axios.post(url, postData)
            .then((response) => {
                console.log(response);
                this.props.history.push('/');
            })
            .catch(() => {
                alert('Ne pare rau, nu am putut sa va inregistram. Va rugam incercati din nou');
            });
    };

    render() {
        return (
            <div className="Container">
                <div className="Navbar">
                    <div className="Name">
                        Wheels Share
                    </div>
                    <div className="Login">
                        <input placeholder="E-mail" className="InsertLogin"></input>
                        <input type="password" placeholder="Password" className="InsertLogin"></input>
                        <button onClick={this.handleLogin} style={{"font-size": "smaller"}}>Login</button>
                    </div>
                </div>
                <div className="Content">
                    <div className="Photo">
                        <img alt="" src="/img/welcome-image2.png"/>
                    </div>

                    <div className="Register">
                        <div className="Join">Join us</div>
                        <input onChange={this.handleName} placeholder="Name"/>
                        <input onChange={this.handleSurname} placeholder="Surname"/>
                        <input onChange={this.handleEmail} placeholder="E-mail"/>
                        <input onChange={this.handlePassword} type="password" placeholder="Password"/>
                        <button onClick={this.handleSignup}>Sign Up</button>
                    </div>

                </div>

            </div>
        );
    }
}

export default withRouter(WelcomePage);