import React, {Component} from 'react';
import './UserHomepage.css';
import '../../common_css/UserNavbar.css';

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
                            <i onClick={this.handleNotifications} className="material-icons">notifications_active</i>
                            <span className="badge">{this.state.notifications_badge}</span>
                        </div>
                        <div className="IconWrapper">
                            <i onClick={this.handleQuestionsModal} className="material-icons">email</i>
                            <span className="badge">{this.state.questions_badge}</span>
                        </div>
                        <div className="IconWrapper">
                            <i onClick={() => {
                                this.props.history.push('/');
                            }} className="material-icons">exit_to_app</i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(UserHomepage);