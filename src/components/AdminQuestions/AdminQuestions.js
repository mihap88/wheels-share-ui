import React, {Component} from 'react';
import '../../common_css/AdminNavbar.css';
import './AdminQuestions.css';
import '../../common_css/AdminModal.css';

class AdminQuestions extends Component {

    render() {
        if (!this.props.show) {
            return(
                <div className="modal display-none">

                </div>
            )
        }
        return (
            <div className="modal display-block">
                <div className="modal-main">
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
                    <div className="topbar">
                        <i onClick={this.props.closeModal} className="material-icons">clear</i>
                    </div>
            </div>
            </div>
        )
    }
}


export default AdminQuestions;