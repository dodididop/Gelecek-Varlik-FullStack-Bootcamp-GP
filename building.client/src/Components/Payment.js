import {useEffect, useState} from 'react'
import { Table } from "react-bootstrap"
import axios from 'axios';

const baseURL = "http://localhost:5000/api/Payments"
function Payment() {
    const [payments, setPayment] = useState([]);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPayment(response.data.entity);
            console.log(response.data.entity);
        })
        
      }, []);
    
      if (!payments) return null;

    return (
        <div>
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
    )
}

export default Payment
