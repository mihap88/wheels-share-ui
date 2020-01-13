import React, {Component} from 'react';
import './UserRentCar.css';
import '../../common_css/UserNavbar.css';
import '../../common_css/UserSidebar.css';

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

    render() {
        if (!this.props.show) {
            return (
                <div className="page display-none">
                </div>
            )
        }

        return (
            <div className="page display-block">

                <div className="user-page">
                    <div className="rent-car-preview-container">
                        <div className="rent-car-detail-title">{this.state.car.name} (${this.state.car.pricePerDay})</div>
                        <img className="rent-car-detail-photo" alt=""
                             src={this.state.car.photo}/>
                        <div className="car-detail-content">Seats nr: {this.state.car.seatsNumber}, Automatic gearbox <img
                            style={{"width": "15px"}} alt=""
                            src={this.state.car.automaticGearBox ? "https://w0.pngwave.com/png/528/278/check-mark-computer-icons-check-tick-s-free-icon-png-clip-art-thumbnail.png" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSj5yUyCu_btfNxJSNDHmpoB9y3VeDm0qRoSKQ1iyRNDn_yBS&s"}/>
                            , Fuel: {this.state.car.fuel}
                        </div>
                    </div>
                    <div className="input-group input-daterange">
                        <input type="text" className="form-control" value="2012-04-05"/>
                            <div className="input-group-addon">to</div>
                            <input type="text" className="form-control" value="2012-04-19"/>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(UserRentCar);