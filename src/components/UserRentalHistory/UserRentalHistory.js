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
        }
    }

    componentDidMount() {
        console.log('user email: ' + this.state.email);
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
                {this.state.cars.map((car, key) => {
                    return this.renderCarDetail(car)
                })}
            </div>
        )
    }
}

export default withRouter(UserRentalHistory);