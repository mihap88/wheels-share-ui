import React, { Component } from 'react';
import './AdminHomepage.css';

import {withRouter} from "react-router-dom";

class AdminHomepage extends Component {

    handleInbox = () => {
        alert("Inbox")
    };

    handleNotifications = () => {
        alert("Notifs")
    };

    handleLogout = () => {
        alert("Logout")
    };

    render() {
        return (
            <div className="Container">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                <div className="Navbar">
                    <div className="Name">
                        Wheels Share - Admin
                    </div>
                    <div className="AdminIcons">
                        <i onClick={this.handleNotifications} className="material-icons">notifications</i>
                        <i onClick={this.handleInbox} className="material-icons">mail</i>
                        <i onClick={this.handleLogout} className="material-icons">exit_to_app</i>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AdminHomepage);