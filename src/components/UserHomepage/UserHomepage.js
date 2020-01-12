import React, {Component} from 'react';
import './UserHomepage.css';
import '../../common_css/UserNavbar.css';
import '../../common_css/UserSidebar.css';

import {withRouter} from "react-router-dom";

class UserHomepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.state.email,
            home: false,
            faq: false,
            current_rental: false,
            rental_history: false,
        }
    }

    componentDidMount() {
        console.log('user email: ' + this.state.email);
    }

    handleHome = () => {
        this.setState({
            home: true,
            faq: false,
            current_rental: false,
            rental_history: false,
        })
    }

    handleFAQ = () => {
        this.setState({
            home: false,
            faq: true,
            current_rental: false,
            rental_history: false,
        })
    }

    handleCurrentRental = () => {
        this.setState({
            home: false,
            faq: false,
            current_rental: true,
            rental_history: false,
        })
    }

    handleRentalHistory = () => {
        this.setState({
            home: false,
            faq: false,
            current_rental: false,
            rental_history: true,
        })
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
                    <a onClick={this.handleHome}>Home</a>
                    <a onClick={this.handleFAQ}>FAQ</a>
                    <a onClick={this.handleCurrentRental}>Current rental</a>
                    <a onClick={this.handleRentalHistory}>Rental History</a>
                </div>
                <div className="content">

                </div>
            </div>
        );
    }
}

export default withRouter(UserHomepage);