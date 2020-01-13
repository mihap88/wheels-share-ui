import React, {Component} from 'react';
import axios from 'axios';
import './WelcomePage.css';
import {WHEELS_SHARE_SERVICE} from "../../App";

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

        const url = WHEELS_SHARE_SERVICE + '/logIn/' + this.state.email
            + '/' + this.state.password;

        axios.get(url, {timeout: 10000})
            .then((response) => {
                if (response.data.status === 'NOK') {
                    alert('Wrong e-mail or password');

                } else if (response.data.status === 'OK' && response.data.user.adminRights) {
                    const location = {
                        pathname: '/admin',
                        state: {
                            email: this.state.email
                        }
                    };
                    this.props.history.push(location);

                } else if (response.data.status === 'OK' && !response.data.user.adminRights) {
                    const location = {
                        pathname: '/user',
                        state: {
                            email: this.state.email
                        }
                    };
                    this.props.history.push(location);
                }
            })
            .catch((response) => {
                alert('Sorry, we have encountered a problem. Please try again');
            });
    };

    handleSignUp = (e) => {
        e.preventDefault();
        const url = WHEELS_SHARE_SERVICE + '/signUp';
        const postData = {
            emailAddress: this.state.email,
            password: this.state.password,
            firstName: this.state.name,
            lastName: this.state.surname,
            adminRights: false
        };

        axios.post(url, postData, {timeout: 10000})
            .then((response) => {
                if (response.data === 'OK') {
                    alert('Congrats! Your user was successfully created');
                    window.location.reload();
                } else if (response.data === 'NOK') {
                    alert('Seems that this e-mail is already used. Please insert another e-mail');
                }
            })
            .catch(() => {
                alert('Sorry, we have encountered a problem. Please try again');
                window.location.reload();
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
                        <input onChange={this.handleEmail} placeholder="E-mail" className="InsertLogin"></input>
                        <input onChange={this.handlePassword} type="password" placeholder="Password"
                               className="InsertLogin"></input>
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
                        <button onClick={this.handleSignUp}><i className="fa fa-refresh fa-spin"></i> Sign Up</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(WelcomePage);