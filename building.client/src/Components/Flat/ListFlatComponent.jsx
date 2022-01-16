import React, { Component } from 'react'
import FlatService from '../../sevices/FlatService'
import { Table } from "react-bootstrap"

export default class ListFlatComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flats: []
        }
        this.addFlat = this.addFlat.bind(this);
        this.editFlat = this.editFlat.bind(this);
        this.deleteFlat = this.deleteFlat.bind(this);
    }
    deleteFlat(id){
        
        FlatService.deleteFlat(id).then( res => {
            this.setState({flats: this.state.flats.filter(flat => flat.id !== id)});
        });
    }
    viewFlat(id){
        this.props.history.push(`/view-flat/${id}`);
    }
    editFlat(id){
        this.props.history.push(`/add-flat/${id}`);
    }
    componentDidMount() {
        FlatService.getFlats().then((res)=> {
            this.setState({
                flats: res.data.entity
            })
            console.log(res.data.entity)
        })
    }
    addFlat(){
        this.props.history.push('/add-flat/_add');
    }
    render() {
        const {flats} = this.state;
        return (
            <div>
                <h3 className="text-center">Daire Listesi</h3>
                <div className = "row">
                    <button className="btn btn-primary"  onClick={this.addFlat}>Daire Ekle</button>
                 </div>
                 <br></br>
                <div className="row">
                    <Table className= "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Blok</th>
                                <th>Tip</th>
                                <th>Kat</th>
                                <th>Daire No</th>
                                <th>Daire Sahibi</th>
                                <th>Durumu</th>
                                <th>İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                flats.map(
                                    (flat) => { return (
                                    <tr key={flat.id}>
                                        <td type="text">{flat.block}</td>
                                        <td>{flat.type}</td>
                                        <td>{flat.storey}</td>
                                        <td>{flat.flatNumber}</td>
                                        <td>{flat.isFlatOwner ? "Ev sahibi":"Kiracı"}</td>
                                        <td>{flat.isFull ? "Dolu":"Boş"}</td>
                                        <td>
                                                 <button onClick={ () => this.editFlat(flat.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteFlat(flat.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewFlat(flat.id)} className="btn btn-info">View </button>
                                             </td>
                                    </tr>)}
                                    )
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}