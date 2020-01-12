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
                    <button onClick={this.props.closeModal} className="btn btn-primary">Submit</button>
            </div>
            </div>
        )
    }
}


export default AdminQuestions;