import React, { Component } from 'react'
import FlatService from '../../sevices/FlatService' 

export default class CreateFlatComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            block: '',
            type: '',
            storey: ''
        } 
        
        this.changeBlockHandler = this.changeBlockHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.changeFlatNumberHandler = this.changeFlatNumberHandler.bind(this);
        this.saveOrUpdateFlat = this.saveOrUpdateFlat.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            FlatService.getFlatById(this.state.id).then( (res) =>{
                let Flat = res.data;
                this.setState({block: Flat.block,
                    type: Flat.type,
                    storey : Flat.storey
                });
            });
        }        
    }
    saveOrUpdateFlat = (e) => {
        e.preventDefault();
        let Flat = {block: this.state.block, type: this.state.type, storey: this.state.storey};
        console.log('Flat => ' + JSON.stringify(Flat));

        // step 5
        if(this.state.id === '_add'){
            FlatService.createFlat(Flat).then(res =>{
                this.props.history.push('/Flats');
            });
        }else{
            FlatService.updateFlat(Flat, this.state.id).then( res => {
                this.props.history.push('/Flats');
            });
        }
    }
    
    changeBlockHandler= (event) => {
        this.setState({block: event.target.value});
    }

    changeTypeHandler= (event) => {
        this.setState({type: event.target.value});
    }

    changeStoreyHandler= (event) => {
        this.setState({storey: event.target.value});
    }
    changeFlatNumberHandler= (event) => {
        this.setState({flatNumber: event.target.value});
    }

    cancel(){
        this.props.history.push('/Flats');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Daire Ekle</h3>
        }else{
            return <h3 className="text-center">Daire Güncelle</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Blok: </label>
                                            <input placeholder="Blok" name="block" className="form-control" 
                                                value={this.state.block} onChange={this.changeBlockHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Tipi </label>
                                            <input placeholder="Daire Tipi" name="type" className="form-control" 
                                                value={this.state.type} onChange={this.changeTypeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Kat: </label>
                                            <input placeholder="Kat" name="storey" className="form-control" 
                                                value={this.state.storey} onChange={this.changeStoreyHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Daire No: </label>
                                            <input placeholder="Kat" name="flatNumber" className="form-control" 
                                                value={this.state.flatNumber} onChange={this.changeFlatNumberHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateFlat}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

