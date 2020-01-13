import React, {Component} from 'react';
import './UserFAQPage.css';
import '../../common_css/UserNavbar.css';
import '../../common_css/UserSidebar.css';

import {withRouter} from "react-router-dom";

class UserFAQPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.state.email,
            questions: [],
        }
    }

    componentDidMount() {
        console.log('user email: ' + this.state.email);
    }

    componentWillReceiveProps(props) {
        this.setState({
            questions: this.props.questions,
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
                FAQ
            </div>
        )
    }
}

export default withRouter(UserFAQPage);