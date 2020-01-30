import React, {Component} from 'react';
import './UserRentalHistory.css';
import '../../common_css/UserNavbar.css';
import '../../common_css/UserSidebar.css';

import {withRouter} from "react-router-dom";

class UserRentalHistory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.state.email,
            rentals: this.props.rentals,
        }
    }

    componentDidMount() {
        console.log('user email: ' + this.state.email);
    }

    componentWillReceiveProps(props) {
        this.setState({
            rentals: this.props.rentals
        })
    }

    renderRentalDetails = (rental) => {
        return (
            <div className="rental-preview-container">
                <div className="rental-detail-title">Car: {rental.id} Price: ${rental.price}</div>
                <div className="rental-detail-content">
                    <div>Start date: {rental.rentPeriod.split('/')[0]}    End date: {rental.rentPeriod.split('/')[1]}</div>
                    <div>Ongoing: {rental.ongoing ? "YES" : "NO"}</div>
                </div>
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
                <div className="user-rentals-page">
                    {this.state.rentals.map((rental, key) => {
                        return this.renderRentalDetails(rental)
                    })}
                </div>
            </div>
        )
    }
}

export default withRouter(UserRentalHistory);