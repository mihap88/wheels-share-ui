import React, {Component} from 'react';
import axios from 'axios';
import './AdminHomepage.css';

import {withRouter} from "react-router-dom";

class AdminHomepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions_badge: '6',
            notifications_badge: '5',
        }
    }

    componentDidMount() {

    }

    handleQuestions = () => {
        alert("Questions")
    };

    handleNotifications = () => {
        alert("Notifs")
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
                            <i onClick={this.handleNotifications} className="material-icons">notifications_alerts</i>
                            <span className="badge">{this.state.notifications_badge}</span>
                        </div>
                        <div className="IconWrapper">
                            <i onClick={this.handleQuestions} className="material-icons">email</i>
                            <span className="badge">{this.state.questions_badge}</span>
                        </div>
                        <div className="IconWrapper">
                            <i onClick={() => {this.props.history.push('/');}} className="material-icons">exit_to_app</i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AdminHomepage);