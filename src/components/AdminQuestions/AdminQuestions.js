import React, {Component} from 'react';
import '../../common_css/AdminNavbar.css';
import './AdminQuestions.css';
import '../../common_css/AdminModal.css';
import {QUESTIONS_SERVICE} from "../../App";
import axios from "axios";

class AdminQuestions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: '',
            questions: [],
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            questions: this.props.questions,
        })
    }

    handleAnswer = (e) => {
        this.setState({
            answer: e.target.value
        })
    }

    arrayRemove = (arr, value) => {
        return arr.filter(function (element) {
            return element.id != value;
        });

    }

    sendAnswer = (e) => {
        debugger;
        const request_url = QUESTIONS_SERVICE + "/questions/answer";

        const postData = {
            id: e.target.id,
            answer: this.state.answer,
        };

        axios.post(request_url, postData, {timeout: 10000})
            .then((response) => {
                if (response.data === 'OK') {
                    this.setState({
                        questions: this.arrayRemove(this.state.questions, postData.id)
                    });
                    let input = document.getElementById("answer");
                    input.value = "";
                }
            });
    }

    displayQuestion = (question_data) => {
        return (
            <div className="question-block">
                <div className="question">
                    <div className="email">
                        {question_data.userEmailAddress}
                    </div>
                    <div className="question-text">
                        {question_data.question}
                    </div>
                </div>
                <div className="answer">
                    <div className="form-inline">
                        <div className="form-group mx-sm-3 mb-2">
                            <label className="sr-only">Password</label>
                            <input onChange={this.handleAnswer} id="answer" className="form-control"
                                   placeholder="Type your answer here"/>
                        </div>
                        <button onClick={this.sendAnswer} id={question_data.id} className="btn btn-primary mb-2">
                            Answer question
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        if (!this.props.show) {
            return (
                <div className="modal display-none">
                </div>
            )
        }

        return (
            <div className="modal display-block">
                <div className="modal-main modal-dim">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                    <div className="topbar">
                        <div className="questions-title">Pending questions</div>
                        <i onClick={this.props.closeModal} className="exit-button material-icons">clear</i>
                    </div>
                    <div className="modal-content">
                        {this.state.questions.map((question_data, id) => {
                            return this.displayQuestion(question_data)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}


export default AdminQuestions;