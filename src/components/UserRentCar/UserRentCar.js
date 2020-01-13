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

                </div>
            </div>
        )
    }
}

export default withRouter(UserRentCar);