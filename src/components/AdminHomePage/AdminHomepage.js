import React, {Component} from 'react';
import axios from 'axios';
import {FormControl} from "react-bootstrap";
import AdminAddItem from '../AdminAddItem/AdminAddItem';
import AdminQuestions from '../AdminQuestions/AdminQuestions';
import {QUESTIONS_SERVICE} from "../../App";
import './AdminHomepage.css';
import '../../common_css/AdminNavbar.css'

import {withRouter} from "react-router-dom";

class AdminHomepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.state.email,
            questions_badge: '',
            questions: [],
            notifications_badge: '',
            showAddItemModal: false,
            showQuestionsModal: false,
        }
    }

    componentDidMount() {
        const request_url = QUESTIONS_SERVICE + '/pending-questions';
        axios.get(request_url, {timeout: 10000})
            .then((response) => {
                if (response.status === 200) {
                    this.setState({
                        questions: response.data,
                        questions_badge: response.data.length == 0 ? '' : response.data.length
                    });
                }
            })
    }

    handleNotifications = () => {
        alert("Notifs")
    };

    handleQuestionsModal = () => {
        this.setState({showQuestionsModal: true});
    };

    handleCloseQuestionsModal = () => {
        this.setState({showQuestionsModal: false});
    };

    handleAddItemModal = () => {
        this.setState({showAddItemModal: true});
    };

    handleCloseAddItemModal = () => {
        this.setState({showAddItemModal: false});
    };

    render() {
        return (
            <div className="Container">
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                <script src="https://kit.fontawesome.com/yourcode.js"></script>
                <div className="Navbar">
                    <div className="Name">
                        Wheels Share - Admin
                    </div>
                    <div className="AdminIcons">
                        <div className="IconWrapper">
                            <i onClick={this.handleNotifications} className="material-icons">notifications_active</i>
                            <span className="badge">{this.state.notifications_badge}</span>
                        </div>
                        <div className="IconWrapper">
                            <i onClick={this.handleQuestionsModal} className="material-icons">email</i>
                            <span className="badge">{this.state.questions_badge}</span>
                        </div>
                        <div className="IconWrapper">
                            <i onClick={() => {
                                this.props.history.push('/');
                            }} className="material-icons">exit_to_app</i>
                        </div>
                    </div>
                </div>
                <button style={{"width": "10px", "height": "20px", "padding-top": "100px"}}
                        onClick={this.handleAddItemModal}>temporaryAddItem
                </button>
                <AdminQuestions
                    show={this.state.showQuestionsModal}
                    closeModal={this.handleCloseQuestionsModal}
                    questions={this.state.questions}
                />
                <AdminAddItem
                    show={this.state.showAddItemModal}
                    closeModal={this.handleCloseAddItemModal}
                />
            </div>
        )
    }
}

export default withRouter(AdminHomepage);