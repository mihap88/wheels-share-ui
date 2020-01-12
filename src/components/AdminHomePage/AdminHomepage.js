import React, {Component} from 'react';
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
                <script src="https://kit.fontawesome.com/yourcode.js"></script>
                <div className="Navbar">
                    <div className="Name">
                        Wheels Share - Admin
                    </div>
                    <div className="AdminIcons">
                        <div className="IconWrapper">
                            <i onClick={this.handleNotifications} className="material-icons">notifications_alert</i>
                            <span className="badge">{this.state.notifications_badge}</span>
                        </div>
                        <div className="IconWrapper">
                            <i onClick={this.handleInbox} className="material-icons">email</i>
                            <span className="badge">{this.state.inbox_badge}</span>
                        </div>
                        <div className="IconWrapper">
                            <i onClick={this.handleLogout} className="material-icons">notifications_alert</i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AdminHomepage);