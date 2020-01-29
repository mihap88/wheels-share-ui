import React, {Component} from 'react';
import './UserRentCar.css';
import '../../common_css/UserNavbar.css';
import '../../common_css/UserSidebar.css';
import {LinkedCalendar} from 'rb-datepicker';

import {withRouter} from "react-router-dom";
import {WHEELS_SHARE_SERVICE} from "../../App";
import axios from "axios";

class UserRentCar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.state.email,
            car: {},
            rentPeriod: "",
        }
    }

    componentDidMount() {
        console.log('user email: ' + this.state.email);
    }

    componentWillReceiveProps(props) {
        this.setState({
            car: this.props.car,
        })
    }

    handleDateChange = (e) => {
        const startMonth = e.startDate.$M <= 9 ? "0" + (e.startDate.$M + 1) : (e.startDate.$M + 1);
        const endMonth = e.endDate.$M <= 9 ? "0" + (e.endDate.$M + 1) : (e.endDate.$M + 1);
        this.setState( {
            rentPeriod: e.startDate.$y + "-" + startMonth + "-" +  e.startDate.$D + "/" + e.endDate.$y + "-" + endMonth + "-" + e.endDate.$D,
        })
    }

    handleRentCar = (e) => {
        if (this.state.rentPeriod === "") {
            return;
        }

        const cars_request_url = WHEELS_SHARE_SERVICE + '/rent';

        const postData = {
            carId: this.state.car.id,
            rentPeriod: this.state.rentPeriod,
            userEmailAddress: this.state.email,
            price: this.state.car.pricePerDay,
            ongoing: false,
        };

        axios.post(cars_request_url, postData,{timeout: 10000})
            .then((response) => {
                if (response.status === 200) {
                    if (response.data) {
                        document.getElementById("rentResult").innerHTML = "Car rented successfully!";
                    } else {
                        document.getElementById("rentResult").innerHTML = "Unable to rent car. Please try another period.";
                    }

                }
            });
    }

    render() {
        if (!this.props.show) {
            return (
                <div className="page display-none">
                </div>
            )
        }

        return (
            <div className="page display-block">
                <div className="rent-car-page">
                    <div className="rent-car-preview-container">
                        <div className="rent-car-detail-title">{this.state.car.name} (${this.state.car.pricePerDay})
                        </div>
                        <img className="rent-car-detail-photo" alt=""
                             src={this.state.car.photo}/>
                        <div className="rent-car-detail-content">
                            <ul>Seats nr: {this.state.car.seatsNumber}</ul>
                            <ul>Fuel: {this.state.car.fuel}</ul>
                            <ul>Automatic gearbox
                                <img style={{"width": "15px"}} alt=""
                                     src={this.state.car.automaticGearBox ? "https://w0.pngwave.com/png/528/278/check-mark-computer-icons-check-tick-s-free-icon-png-clip-art-thumbnail.png" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSj5yUyCu_btfNxJSNDHmpoB9y3VeDm0qRoSKQ1iyRNDn_yBS&s"}/>
                            </ul>
                            <ul></ul>
                            <ul></ul>
                        </div>
                    </div>
                    <div className={"rent-car-right"}>
                        <div className="rent-car-date-picker">
                            <LinkedCalendar onDatesChange={this.handleDateChange} showDropdowns={true}/>
                        </div>
                        <div className="rent-car-price">
                            Price per day: ${this.state.car.pricePerDay}
                        </div>
                        <button className="rent-button" onClick={this.handleRentCar}>Rent car</button>
                        <div id="rentResult"></div>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(UserRentCar);