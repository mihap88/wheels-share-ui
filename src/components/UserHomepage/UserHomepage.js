import React, {Component} from 'react';
import './UserHomepage.css';
import '../../common_css/UserNavbar.css';
import '../../common_css/UserSidebar.css';

import {withRouter} from "react-router-dom";

class UserHomepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.state.email

        }
    }

    componentDidMount() {
        console.log('user email: ' + this.state.email);
    }

    render() {
        return (
            <div className="Container">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                <script src="https://kit.fontawesome.com/yourcode.js"></script>
                <div className="Navbar">
                    <div className="Name">
                        Wheels Share - Admin
                    </div>
                    <div className="LogoutIcon">
                        <div className="IconWrapper">
                            <i onClick={() => {
                                this.props.history.push('/');
                            }} className="material-icons">exit_to_app</i>
                        </div>
                    </div>
                </div>
                <div className="sidenav">
                    <a href="#about">Home</a>
                    <a href="#services">FAQ</a>
                    <a href="#clients">Current rental</a>
                    <a href="#contact">Rental History</a>
                </div>
            </div>
        );
    }
}

export default withRouter(UserHomepage);