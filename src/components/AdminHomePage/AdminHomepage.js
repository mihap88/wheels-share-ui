import React, {Component} from 'react';
import axios from 'axios';
import AdminAddItem from '../AdminAddItem/AdminAddItem';
import AdminQuestions from '../AdminQuestions/AdminQuestions';
import {QUESTIONS_SERVICE, WHEELS_SHARE_SERVICE} from "../../App";
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
            cars: []
        }
    }

    componentDidMount() {
        const questions_request_url = QUESTIONS_SERVICE + '/pending-questions';
        axios.get(questions_request_url, {timeout: 10000})
            .then((response) => {
                if (response.status === 200) {
                    this.setState({
                        questions: response.data,
                        questions_badge: response.data.length == 0 ? '' : response.data.length
                    });
                }
            });

        const cars_request_url = WHEELS_SHARE_SERVICE + '/cars';
        axios.get(cars_request_url, {timeout: 10000})
            .then((response) => {
                if (response.status === 200) {
                    this.setState({
                        cars: response.data
                    })
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
        window.location.reload();
    };

    deleteCar = (e) => {
        const url = WHEELS_SHARE_SERVICE + '/admin/cars/delete/' + e.target.id;

        axios.delete(url, {timeout: 10000})
            .then((response) => {
                if (response.status == 200) {
                    alert("The item has been deleted");
                    window.location.reload();
                }

            })
            .catch(() => {
                alert("Sorry, something went wrong. Please try again later");
            })

    };

    renderCarDetail = (car) => {
        return (
            <div className="car-preview-container">
                <div className="car-detail-title">{car.name} (${car.pricePerDay})</div>
                <img className="car-detail-photo" alt=""
                     src={car.photo}/>
                <div className="car-detail-content">Seats nr: {car.seatsNumber}, Automatic gearbox <img
                    style={{"width": "15px"}} alt=""
                    src={car.automaticGearBox ? "https://w0.pngwave.com/png/528/278/check-mark-computer-icons-check-tick-s-free-icon-png-clip-art-thumbnail.png" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSj5yUyCu_btfNxJSNDHmpoB9y3VeDm0qRoSKQ1iyRNDn_yBS&s"}/>
                    , Fuel: {car.fuel}
                </div>
                <button onClick={this.deleteCar} className="car-detail-button btn btn-primary" id={car.id}>Delete item</button>
            </div>
        );
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
                <div className="admin-page-content">
                    <div className="car-preview-container">
                        <div className="add-item-title">Add new vehicle</div>
                        <img onClick={this.handleAddItemModal} className="add-item-photo" alt=""
                             src="/img/add-item.png"/>
                    </div>

                    {this.state.cars.map((car, key) => {
                        return this.renderCarDetail(car)
                    })}

                </div>

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