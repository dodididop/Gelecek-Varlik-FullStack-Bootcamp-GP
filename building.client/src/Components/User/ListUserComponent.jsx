import React, { Component } from 'react'
import UserService from '../../sevices/UserService'
import { Table } from "react-bootstrap";


export default class ListUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        UserService.getUsers().then((res)=> {
            this.setState({users: res.data.Entity})
            console.log(res.data.Entity)
        })
    }
    render() {
        const { users } = this.state;
        return (
            <div>
                <h2 className="text-center">Kullanıcı Listesi</h2>
                <div className="row">
                    <Table className= "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Ad</th>
                                <th>Soyad</th>
                                <th>Email</th>
                                <th>Telefon</th>
                                <th>Araç Plaka</th>
                                <th>Oluşturulma Tarihi</th>
                                <th>İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(
                                    (user,index) => { return (
                                    <tr key={index}>
                                        <td>{user.name}</td>
                                        <td>{user.surname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNumber}</td>
                                        <td>{user.plateNumber}</td>
                                        <td>{user.createDate}</td>
                                        
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
