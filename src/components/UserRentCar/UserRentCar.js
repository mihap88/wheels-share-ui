import React, {Component} from 'react';
import './UserRentCar.css';
import '../../common_css/UserNavbar.css';
import '../../common_css/UserSidebar.css';
import {LinkedCalendar} from 'rb-datepicker';

import {withRouter} from "react-router-dom";

class UserRentCar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.state.email,
            car: {},
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
        debugger;
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
                            <LinkedCalendar onDatesChange={this.handleDateChange} showDropdowns={false}/>
                        </div>
                        <div className="rent-car-price">
                            Price per day: ${this.state.car.pricePerDay}
                        </div>
                        <button className="rent-button">Rent Car</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(UserRentCar);