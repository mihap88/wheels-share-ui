import React, {Component} from 'react';
import '../../common_css/AdminNavbar.css';
import './AdminAddItem.css';
import '../../common_css/AdminModal.css';

class AdminAddItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            airConditioning: false,
            radio: false,
            abs: false,
            electricWindows: false,
            centralLocking: false,
            bigTrunk: false,
            fuelEfficiency: false,
            familySize: false,
            automaticGearBox: false,
            seatsNumber: 0,
            fuel: '',
            pricePerDay: 0
        }
    }

    handleCheck = (e) => {
        this.setState({
            [e.target.value]: e.target.checked
        });
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSelect = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleAddPhoto = (e) => {
        debugger;
    };

    handleSubmit = () => {
        console.log(this.state);

    };

    render() {
        if (!this.props.show) {
            return (
                <div className="modal display-none"></div>
            )
        }
        return (
            <div className="modal display-block">
                <div className="modal-main">
                    <div>Please add your car details here</div>
                    <div style={{"text-align": "justify"}}>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Car name</label>
                            <div className="col-sm-10">
                                <input onChange={this.handleInputChange} type="text" className="form-control"
                                       placeholder="Car name" name="name"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Description</label>
                            <div className="col-sm-10">
                                <textarea onChange={this.handleInputChange} className="form-control" rows="4"
                                          placeholder="Insert a description" name="description"></textarea>
                            </div>
                        </div>
                        <fieldset className="form-group">
                            <div className="row">
                                <legend className="col-form-label col-sm-2 pt-0">Check only what applies</legend>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input onChange={this.handleCheck} className="form-check-input" type="checkbox"
                                               value="airConditioning"/>
                                        <label className="form-check-label" htmlFor="gridRadios1">Air
                                            conditioning</label>
                                    </div>
                                    <div className="form-check">
                                        <input onChange={this.handleCheck} className="form-check-input" type="checkbox"
                                               value="radio"/>
                                        <label className="form-check-label" htmlFor="gridRadios2">Radio</label>
                                    </div>
                                    <div className="form-check">
                                        <input onChange={this.handleCheck} className="form-check-input" type="checkbox"
                                               value="abs"/>
                                        <label className="form-check-label" htmlFor="gridRadios1">Abs</label>
                                    </div>
                                    <div className="form-check">
                                        <input onChange={this.handleCheck} className="form-check-input" type="checkbox"
                                               value="electricWindows"/>
                                        <label className="form-check-label" htmlFor="gridRadios2">Electric
                                            windows</label>
                                    </div>
                                    <div className="form-check">
                                        <input onChange={this.handleCheck} className="form-check-input" type="checkbox"
                                               value="centralLocking"/>
                                        <label className="form-check-label" htmlFor="gridRadios1">Central
                                            Locking</label>
                                    </div>
                                    <div className="form-check">
                                        <input onChange={this.handleCheck} className="form-check-input" type="checkbox"
                                               value="bigTrunk"/>
                                        <label className="form-check-label" htmlFor="gridRadios2">Big trunk</label>
                                    </div>
                                    <div className="form-check">
                                        <input onChange={this.handleCheck} className="form-check-input" type="checkbox"
                                               value="fuelEfficiency"/>
                                        <label className="form-check-label" htmlFor="gridRadios1">Fuel
                                            efficiency</label>
                                    </div>
                                    <div className="form-check">
                                        <input onChange={this.handleCheck} className="form-check-input" type="checkbox"
                                               value="familySize"/>
                                        <label className="form-check-label" htmlFor="gridRadios2">Family size</label>
                                    </div>
                                    <div className="form-check">
                                        <input onChange={this.handleCheck} className="form-check-input" type="checkbox"
                                               value="automaticGearBox"/>
                                        <label className="form-check-label" htmlFor="gridRadios1">Automatic
                                            gearbox</label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Seats number</label>
                            <div className="col-sm-10">
                                <select onChange={this.handleSelect} className="form-control" name="seatsNumber">
                                    <option>2</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>7</option>
                                    <option>9</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Price per day</label>
                            <div className="col-sm-10">
                                <input onChange={this.handleInputChange} type="text" className="form-control"
                                       placeholder="Price per day" name="pricePerDay"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Fuel</label>
                            <div className="col-sm-10">
                                <select onChange={this.handleSelect} className="form-control" name="fuel">
                                    <option>DIESEL</option>
                                    <option>ELECTRIC</option>
                                    <option>GAS</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupFileAddon01">Upload image</span>
                            </div>
                            <div className="custom-file">
                                <input onChange={this.handleAddPhoto} type="file" className="custom-file-input"
                                       id="inputGroupFile01"
                                       aria-describedby="inputGroupFileAddon01"/>
                                <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default AdminAddItem;