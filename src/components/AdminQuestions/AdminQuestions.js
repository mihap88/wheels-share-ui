import React, {Component} from 'react';
import '../../common_css/AdminNavbar.css';
import './AdminQuestions.css';
import '../../common_css/AdminModal.css';

class AdminQuestions extends Component {

    diplayQuestion = (question_data) => {
        return (
            <div className="question">{question_data.id}</div>
        );
    }

    render() {
        if (!this.props.show) {
            return(
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
                        {this.props.questions.map((question_data, id) => { return this.diplayQuestion(question_data)})}
                    </div>
            </div>
            </div>
        )
    }
}


export default AdminQuestions;