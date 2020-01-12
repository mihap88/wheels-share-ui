import React, { Component } from 'react';
import './HomeUserPage.css';

import {withRouter} from "react-router-dom";

class HomeUserPage extends Component {

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

export default withRouter(HomeUserPage);