import React, { Component } from 'react';
import './UserHomepage.css';
import '../../common_css/UserNavbar.css';

import {withRouter} from "react-router-dom";

class UserHomepage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                USER HOME PAGE
            </div>

        );
    }
}

export default withRouter(UserHomepage);