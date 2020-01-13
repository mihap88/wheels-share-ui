import React, {Component} from 'react';
import './UserHomepage.css';
import '../../common_css/UserNavbar.css';
import '../../common_css/UserSidebar.css';

import {withRouter} from "react-router-dom";
import {UserRentalHistory} from "../UserRentalHistory/UserRentalHistory"

class UserHomepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.state.email,
            showUserHomepage: false,
            showUserRentalHistory: false,
            showUserCurrentRental: false,
            showUserFAQPage: false,
        }
    }

    componentDidMount() {
        console.log('user email: ' + this.state.email);
    }

    handleHome = () => {
        this.setState({
            showUserHomepage: true,
            showUserRentalHistory: false,
            showUserCurrentRental: false,
            showUserFAQPage: false,
        })
    }

    handleFAQ = () => {
        this.setState({
            showUserHomepage: false,
            showUserRentalHistory: true,
            showUserCurrentRental: false,
            showUserFAQPage: false,
        })
    }

    handleCurrentRental = () => {
        this.setState({
            showUserHomepage: false,
            showUserRentalHistory: false,
            showUserCurrentRental: true,
            showUserFAQPage: false,
        })
    }

    handleRentalHistory = () => {
        this.setState({
            showUserHomepage: false,
            showUserRentalHistory: false,
            showUserCurrentRental: false,
            showUserFAQPage: true,
        })
    }

    render() {
        return (
            <div className="Container">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                <script src="https://kit.fontawesome.com/yourcode.js"></script>
                <div className="Navbar">
                    <div className="Name">
                        Wheels Share
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
                    <a onClick={this.handleHome}>Home</a>
                    <a onClick={this.handleFAQ}>FAQ</a>
                    <a onClick={this.handleCurrentRental}>Current rental</a>
                    <a onClick={this.handleRentalHistory}>Rental History</a>
                </div>
                <div className="content">
                    <UserRentalHistory show={this.state.showUserRentalHistory}/>
                    <UserRentalHistory show={this.state.showUserCurrentRental}/>
                    <UserRentalHistory show={this.state.showUserFAQPage}/>
                </div>
            </div>
        );
    }
}

export default withRouter(UserHomePage);