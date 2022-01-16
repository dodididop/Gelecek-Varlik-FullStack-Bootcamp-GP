import React, { Component } from 'react'
import PaymentService from '../../sevices/PaymentService'
import { Table } from "react-bootstrap"

export default class ListPaymentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            payments: []
        }
    }
    componentDidMount() {
        PaymentService.getPayments().then((res)=> {
            this.setState({payments: res.data.Entity})
            console.log(res.data.Entity)
        })
    }
    render() {
        const { payments } = this.state;
        return (
            <div>
                <h2 className="text-center">Kullanıcı Listesi</h2>
                <div className="row">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Daire No</th>
                            <th>Borç Türü</th>
                            <th>Son Ödeme Tarihi</th>
                            <th>Fatura Tutarı</th>
                            <th>Durum</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment,index) => {
                            return(
                                <tr key={index}>
                                    <td>{payment.flatNumber}</td>
                                    <td>{payment.type}</td>
                                    <td>{payment.dueDate}</td>
                                    <td>{payment.amount}</td>
                                    <td>{!payment.isPaid ? "Ödenmedi":"Ödendi"}</td>
                                </tr>)   
                        })}
                    </tbody>
                </Table>
                </div>
                
            </div>
        )
    }
}