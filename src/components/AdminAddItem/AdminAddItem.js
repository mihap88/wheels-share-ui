import React, {Component} from 'react';
import '../../common_css/AdminNavbar.css';
import './AdminAddItem.css';
import '../../common_css/AdminModal.css';

class AdminAddItem extends Component {

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
                <div>Please add your car details here</div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                               placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               placeholder="Password"/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            </div>
        )
    }
}


export default AdminAddItem;