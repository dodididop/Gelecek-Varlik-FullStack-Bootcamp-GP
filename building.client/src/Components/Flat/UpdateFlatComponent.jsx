import React, { Component } from 'react'
import FlatService from '../../sevices/FlatService'

class UpdateFlatComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            isFull: '',
            isFlatOwner: ''
        }
        this.changeIsFullHandler = this.changeIsFullHandler.bind(this);
        this.changeIsFlatOwnerHandler = this.changeIsFlatOwnerHandler.bind(this);
        this.updateFlat = this.updateFlat.bind(this);
    }

    componentDidMount(){
        FlatService.getFlatById(this.state.id).then( (res) =>{
            let flat = res.data;
            this.setState({isFull: flat.isFull,
                isFlatOwner: flat.isFlatOwner,
                emailId : flat.emailId
            });
        });
    }

    updateFlat = (e) => {
        e.preventDefault();
        let flat = {isFull: this.state.isFull, isFlatOwner: this.state.isFlatOwner, emailId: this.state.emailId};
        console.log('flat => ' + JSON.stringify(flat));
        console.log('id => ' + JSON.stringify(this.state.id));
        FlatService.updateFlat(flat, this.state.id).then( res => {
            this.props.history.push('/flats');
        });
    }
    
    changeIsFullHandler= (event) => {
        this.setState({isFull: event.target.value});
    }

    changeIsFlatOwnerHandler= (event) => {
        this.setState({isFlatOwner: event.target.value});
    }


    cancel(){
        this.props.history.push('/flats');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Daire Güncelle</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Durumu: </label>
                                            <input placeholder="First Name" name="isFull" className="form-control" 
                                                value={this.state.isFull} onChange={this.changeIsFullHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Ev Sahibi: </label>
                                            <input placeholder="Last Name" name="isFlatOwner" className="form-control" 
                                                value={this.state.isFlatOwner} onChange={this.changeIsFlatOwnerHandler}/>
                                        </div>
                                    
                                        <button className="btn btn-success" onClick={this.updateFlat}>Kaydet</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>İptal</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateFlatComponent