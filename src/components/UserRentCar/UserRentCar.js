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
                rent car
            </div>
        )
    }
}

export default withRouter(UserRentCar);