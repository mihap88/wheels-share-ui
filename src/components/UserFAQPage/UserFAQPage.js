import React, {Component} from 'react';
import './UserFAQPage.css';
import '../../common_css/UserNavbar.css';
import '../../common_css/UserSidebar.css';
import axios from "axios";
import {QUESTIONS_SERVICE} from "../../App";

import {withRouter} from "react-router-dom";

class UserFAQPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.location.state.email,
            questions: [],
            newQuestion: ''
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

    handleNewQuestion = (q) => {
        this.setState({
            newQuestion: q.target.value
        })
    };

    sendAnswer = (q) => {
        const request_url = QUESTIONS_SERVICE + "/questions/add";

        const postData = {
            user_email_address: this.state.email,
            question: this.state.newQuestion,
        };

        axios.post(request_url, postData, {timeout: 10000})
            .then((response) => {
                if (response.data === 'OK') {
                    
                    // let input = document.getElementById("answer");
                    // input.value = "";
                }
            });
    }



    displayQuestion = (question_data) => {
        return (
            <div className="question-block-user">
                <div className="question-user">
                    <div className="email-user">
                        {question_data.userEmailAddress}
                    </div>
                    <div className="question-text-user">
                        {question_data.question}
                    </div>
                </div>
                <div className="answer-user">
                    {question_data.answer}
                </div>
            </div>
        );
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
                {/* <div className="add-question-block">
                    <input type="submit" value="Add question" required></input>
                </div> */}

                {/* <div className="add-question-block">
                    <input onChange={this.handleNewQuestion} id="question"
                           className="question-input form-group mx-sm-3 mb-2 from-control"
                           placeholder="Ask a new question here"/>
                    <button onClick={this.sendAnswer} id={10} className="btn btn-primary mb-2">
                        Add question
                    </button>
                </div> */}
                <div className="add-question-block">
                    <div >
                        <button onClick={this.sendAnswer} id={10} className="btn btn-primary mb-2">
                            Add question
                        </button>
                    </div>

                    <div >
                        <textarea 
                            onChange={this.handleNewQuestion} 
                            className="new-question-textarea" 
                            aria-label="With textarea"
                            rows="3">
                        </textarea>
                    </div>
                    
                </div>
                
                <div className="modal-content-question-user">
                    {this.state.questions.map((question_data, id) => {
                        return this.displayQuestion(question_data)
                    })}
                </div>
            </div>
        )
    }
}

export default withRouter(UserFAQPage);