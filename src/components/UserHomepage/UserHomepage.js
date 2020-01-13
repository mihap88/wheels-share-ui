import React, {Component} from 'react';
import './UserHomepage.css';
import '../../common_css/UserNavbar.css';
import '../../common_css/UserSidebar.css';

import {withRouter} from "react-router-dom";
import UserRentalHistory from "../UserRentalHistory/UserRentalHistory"
import UserCurrentRental from "../UserCurrentRental/UserCurrentRental"
import UserFAQPage from "../UserFAQPage/UserFAQPage"
import UserCarsList from "../UserCarsList/UserCarsList"
import UserRentCar from "../UserRentCar/UserRentCar"
import {QUESTIONS_SERVICE} from "../../App";
import axios from "axios";

class UserHomepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.state.email,
            showCarsList: true,
            showUserRentalHistory: false,
            showUserCurrentRental: false,
            showUserFAQPage: false,
            showUserRentCar: false,
            questions: [],
        }
    }

    componentDidMount() {
        console.log('user email: ' + this.state.email);

        // request to get questions
        const questions_request_url = QUESTIONS_SERVICE + '/questions';
        axios.get(questions_request_url, {timeout: 10000})
            .then((response) => {
                if (response.status === 200) {
                    this.setState({
                        questions: response.data,
                    });
                }
            });

        // request to get cars
    }

    handleHome = () => {
        this.setState({
            showCarsList: true,
            showUserRentalHistory: false,
            showUserCurrentRental: false,
            showUserFAQPage: false,
            showUserRentCar: false,
        })
    }

    handleFAQ = () => {
        this.setState({
            showCarsList: false,
            showUserRentalHistory: false,
            showUserCurrentRental: false,
            showUserFAQPage: true,
            showUserRentCar: false,
        })
    }

    handleCurrentRental = () => {
        this.setState({
            showCarsList: false,
            showUserRentalHistory: false,
            showUserCurrentRental: true,
            showUserFAQPage: false,
            showUserRentCar: false,
        })
    }

    handleRentalHistory = () => {
        this.setState({
            showCarsList: false,
            showUserRentalHistory: true,
            showUserCurrentRental: false,
            showUserFAQPage: false,
            showUserRentCar: false,
        })
    }

    handleDetailsClick = () => {
        this.setState({
            showCarsList: false,
            showUserRentalHistory: true,
            showUserCurrentRental: false,
            showUserFAQPage: false,
            showUserRentCar: false,
        })
    }

    render() {
        return (
            <div className="Container">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                <script src="https://kit.fontawesome.com/yourcode.js"></script>
                <div className="UserNavbar">
                    <div className="UserName">
                        Wheels Share
                    </div>
                    <div className="UserIconWrapper">
                        <i onClick={() => {
                            this.props.history.push('/');
                        }} className="material-icons">exit_to_app</i>
                    </div>
                </div>
                <div className="sidenav">
                    <a onClick={this.handleHome}>Home</a>
                    <a onClick={this.handleFAQ}>FAQ</a>
                    <a onClick={this.handleCurrentRental}>Current rental</a>
                    <a onClick={this.handleRentalHistory}>Rental History</a>
                </div>
                <div className="content-userpage">
                    <UserCarsList show={this.state.showCarsList}/>
                    <UserRentalHistory show={this.state.showUserRentalHistory}/>
                    <UserCurrentRental show={this.state.showUserCurrentRental}/>
                    <UserFAQPage show={this.state.showUserFAQPage} questions={this.state.question}/>
                    <UserRentCar show={this.state.showUserRentCar}/>
                </div>
            </div>
        );
    }
}

export default withRouter(UserHomepage);