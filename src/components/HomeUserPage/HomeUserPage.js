import React, { Component } from 'react';
import './WelcomePage.css';

class WelcomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    handleClick = () => {
        alert(this.state.email);
    };

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
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
                        <button style={{"font-size": "smaller"}}>Login</button>
                    </div>
                </div>
                <div className="Content">
                    <div className="Photo">
                        <img src="/img/welcome-image2.png" />
                    </div>

                    <div className="Register">
                        <div>Join us</div>
                        <input placeholder="Name" />
                        <input placeholder="Surname" />
                        <input onChange={this.handleEmail} placeholder="E-mail" />
                        <input type="password" placeholder="Password" />
                        <button onClick={this.handleClick}>Sign Up</button>
                    </div>

                </div>

            </div>

        );
    }
}

export default WelcomePage;