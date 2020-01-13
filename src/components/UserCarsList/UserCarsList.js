import React, {Component} from 'react';
import './UserCarsList.css';
import '../../common_css/UserNavbar.css';
import '../../common_css/UserSidebar.css';

import {withRouter} from "react-router-dom";

class UserCarsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.state.email,
            cars: []
        }
    }

    componentDidMount() {
        console.log('user email: ' + this.state.email);
    }

    componentWillReceiveProps(props) {
        this.setState({
            cars: this.props.cars
        })
    }

    renderCarDetail = (car) => {
        return (
            <div className="user-car-preview-container">
                <div className="user-car-detail-title">{car.name} (${car.pricePerDay})</div>
                <img className="user-car-detail-photo" alt=""
                     src={car.photo}/>
                <div className="user-car-detail-content">Seats nr: {car.seatsNumber}, Automatic gearbox <img
                    style={{"width": "15px"}} alt=""
                    src={car.automaticGearBox ? "https://w0.pngwave.com/png/528/278/check-mark-computer-icons-check-tick-s-free-icon-png-clip-art-thumbnail.png" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSj5yUyCu_btfNxJSNDHmpoB9y3VeDm0qRoSKQ1iyRNDn_yBS&s"}/>
                    , Fuel: {car.fuel}
                </div>
                <button onClick={() => this.props.handleDetails(car)} className="user-car-detail-button btn btn-primary"
                        id={car.id}>See car
                </button>
            </div>
        );
    };

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
                    {this.state.cars.map((car, key) => {
                        return this.renderCarDetail(car)
                    })}
                </div>
            </div>
        )
    }
}

export default withRouter(UserCarsList);