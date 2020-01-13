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
        }
    }

    componentDidMount() {
        console.log('user email: ' + this.state.email);
    }

    componentWillReceiveProps(props) {
        this.setState({
            cars: this.props.cars,
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
                <button onClick={() => this.props.handleDetails(
                {
                    'name': 'Alfa Romeo',
                    'description': 'Mito',
                    'airConditioning': true,
                    'radio': false,
                    'abs': false,
                    'electricWindows': true,
                    'centralLocking': false,
                    'bigTrunk': false,
                    'fuelEfficiency': false,
                    'familySize': false,
                    'automaticGearBox': true,
                    'seatsNumber': 0,
                    'fuel': '',
                    'pricePerDay': 0,
                    'photo': ''
                })}>Rent Car</button>
            </div>
        )
    }
}

export default withRouter(UserCarsList);