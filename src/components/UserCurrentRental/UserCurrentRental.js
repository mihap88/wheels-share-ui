import React, {Component} from 'react';
import './UserCurrentRental.css';
import '../../common_css/UserNavbar.css';
import '../../common_css/UserSidebar.css';

import {withRouter} from "react-router-dom";

class UserCurrentRental extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.state.email,
            show: false
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
                    <div>Start date: {rental.rentPeriod.split('/')[0]} End date: {rental.rentPeriod.split('/')[1]}</div>
                    <div className="ongoing-rental">Ongoing</div>
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

export default withRouter(UserCurrentRental);