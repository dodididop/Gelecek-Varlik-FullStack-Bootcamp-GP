import React, { useState } from "react";
import axios from 'axios'
import  {useNavigate}  from "react-router-dom";

const AddUser = () => {
  let history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",  
    phoneNumber: "",
    tcNo: "",
    plateNumber: "",
    role: ""
  });

  const { name, surname, email, phoneNumber, tcNo, plateNumber, role } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/Users", user,{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Kullanıcı Ekle</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Ad"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Soyad"
              name="surname"
              value={surname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="TC No"
              name="tcNo"
              value={tcNo}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Araç Plakası"
              name="plateNumber"
              value={plateNumber}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Rol"
              name="role"
              value={role}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Ekle</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;