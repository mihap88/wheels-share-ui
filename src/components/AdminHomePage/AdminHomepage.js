import React, {Component} from 'react';
import axios from 'axios';
import {FormControl} from "react-bootstrap";
import AdminAddItem from '../AdminAddItem/AdminAddItem';
import AdminQuestions from '../AdminQuestions/AdminQuestions';
import QUESTIONS_SERVICE from "../../App";
import './AdminHomepage.css';
import '../../common_css/AdminNavbar.css'

import {withRouter} from "react-router-dom";

class AdminHomepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions_badge: '',
            questions: [],
            notifications_badge: '',
            showAddItemModal: false,
            showQuestionsModal: false,
        }
    }

    componentDidMount() {
        // Call to get questions

        this.setState({
            questions: [
                {
                    id: 1,
                    question: "sfl",
                },

            ],
            questions_badge: 1,
        });

        const request_url = QUESTIONS_SERVICE + '/questions';
        // const postData = {
        //     emailAddress: this.state.email,
        //     password: this.state.password,
        //     firstName: this.state.name,
        //     lastName: this.state.surname,
        //     adminRights: false
        // };
        //
        // axios.get(url, postData, {timeout: 10000})
        //     .then((response) => {
        //         if (response.data === 'OK') {
        //             alert('Congrats! Your user was successfully created');
        //             window.location.reload();
        //         } else if (response.data === 'NOK') {
        //             alert('Seems that this e-mail is already used. Please insert another e-mail');
        //         }
        //     })
        //     .catch(() => {
        //         alert('Sorry, we have encountered a problem. Please try again');
        //         window.location.reload();
        //     });
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
                <button style={{"width": "10px", "height": "20px", "padding-top": "100px"}} onClick={this.handleAddItemModal}>temporaryAddItem</button>
                <AdminQuestions
                    show={this.state.showQuestionsModal}
                    closeModal={this.handleCloseQuestionsModal}
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