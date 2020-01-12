import React, { Component } from 'react';
import './AdminHomepage.css';

import {withRouter} from "react-router-dom";

class AdminHomepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inbox_badge: '6',
            notifications_badge: '5',
        }
    }

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
                        <span className="Icon has-badge" data-count={this.state.notifications_badge}>
                          <i onClick={this.handleNotifications} className="Icon material-icons">notifications_alert</i>
                        </span>
                        <i onClick={this.handleInbox} className="material-icons Icon">mail</i>
                        <i onClick={this.handleLogout} className="material-icons Icon">exit_to_app</i>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AdminHomepage);