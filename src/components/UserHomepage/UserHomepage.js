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
import {WHEELS_SHARE_SERVICE} from "../../App";
import axios from "axios";

class UserHomepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.state.email,
            showCarsList: false,
            showUserRentalHistory: false,
            showUserCurrentRental: false,
            showUserFAQPage: false,
            showUserRentCar: false,
            currentRentals: [],
            rentalsHistory: [],
            cars: [],
            car: {},
        }
    }

    componentDidMount() {
        console.log('user email: ' + this.state.email);
        // request to get cars
        const cars_request_url = WHEELS_SHARE_SERVICE + '/cars';
        axios.get(cars_request_url, {timeout: 10000})
            .then((response) => {
                if (response.status === 200) {
                    this.setState({
                        cars: response.data,
                    });
                }
            })
            .finally(() => {
                this.setState({
                    showCarsList: true,
                })
            })
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
        const current_rentals_url = WHEELS_SHARE_SERVICE + '/currentRentals/' + this.state.email;
        axios.get(current_rentals_url, {timeout: 10000})
            .then((response) => {
                if (response.status === 200) {
                    this.setState({
                        currentRentals: response.data,
                    });
                }
            })
            .finally(() => {
                this.setState({
                    showCarsList: false,
                    showUserRentalHistory: false,
                    showUserCurrentRental: true,
                    showUserFAQPage: false,
                    showUserRentCar: false,
                })
            })
    }

    handleRentalsHistory = () => {
        const rentals_history_url = WHEELS_SHARE_SERVICE + '/rentalsHistory/' + this.state.email;

        axios.get(rentals_history_url, {timeout: 10000})
            .then((response) => {
                if (response.status === 200) {
                    debugger;
                    this.setState({
                        rentalsHistory: response.data,
                    });
                }
            })
            .finally(() => {
                this.setState({
                    showCarsList: false,
                    showUserRentalHistory: true,
                    showUserCurrentRental: false,
                    showUserFAQPage: false,
                    showUserRentCar: false,
                })
            })
    }

    handleDetailsClick = (carDetails) => {
        this.setState({
            car: carDetails
        }, () => {
            this.setState({
                showCarsList: false,
                showUserRentalHistory: false,
                showUserCurrentRental: false,
                showUserFAQPage: false,
                showUserRentCar: true,
            });
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
                    <a onClick={this.handleRentalsHistory}>Rental History</a>
                </div>
                <div className="content-userpage">
                    <UserCarsList
                        show={this.state.showCarsList}
                        cars={this.state.cars}
                        handleDetails={this.handleDetailsClick}
                    />
                    <UserRentalHistory
                        rentals={this.state.rentalsHistory}
                        show={this.state.showUserRentalHistory}/>
                    <UserCurrentRental
                        rentals={this.state.currentRentals}
                        show={this.state.showUserCurrentRental}/>
                    <UserFAQPage
                        show={this.state.showUserFAQPage}
                    />
                    <UserRentCar
                        show={this.state.showUserRentCar}
                        car={this.state.car}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(UserHomepage);