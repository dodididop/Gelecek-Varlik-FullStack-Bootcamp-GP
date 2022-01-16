import React, { Component } from 'react'
import FlatService from '../../sevices/FlatService'

class ViewFlatComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            flat: {}
        }
    }

    componentDidMount(){
        FlatService.getFlatById(this.state.id).then( res => {
            this.setState({flat: res.data.entity});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Daire Detayı</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Daire Blok: </label>
                            <div> { this.state.flat.block }</div>
                        </div>
                        <div className = "row">
                            <label> Daire No: </label>
                            <div> { this.state.flat.flatNumber }</div>
                        </div>
                        <div className = "row">
                            <label> Daire Sahibi: </label>
                            <div> { this.state.flat.isFlatOwner }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewFlatComponent