import React, {Component} from 'react';
import axios from 'axios';
import {FormControl} from "react-bootstrap";
import './AdminHomepage.css';

import {withRouter} from "react-router-dom";

const Modal = ({handleClose, show, children}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button onClick={handleClose}>Submit</button>
            </section>
        </div>
    );
};

class AdminHomepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions_badge: '',
            notifications_badge: '',
            show: false,
        }
    }

    componentDidMount() {

    }

    handleNotifications = () => {
        alert("Notifs")
    };

    showModal = () => {
        this.setState({show: true});
    };

    handleSubmit = () => {
        //AICI TB FACUT CALL-ul dupa ce dam submit 😀 suma este pe state

        this.setState({show: false});
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
                            <i onClick={this.showModal} className="material-icons">email</i>
                            <span className="badge">{this.state.questions_badge}</span>
                        </div>
                        <div className="IconWrapper">
                            <i onClick={() => {this.props.history.push('/');}} className="material-icons">exit_to_app</i>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.show} handleClose={this.handleSubmit}>
                    <FormControl
                        placeholder="Please insert your sum"
                    />

                </Modal>
            </div>
        )
    }
}

export default withRouter(AdminHomepage);