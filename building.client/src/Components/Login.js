import React, { useState } from "react";
import axios from "axios";
import  {useNavigate}  from "react-router-dom";


const Login = () => {
  
  const [data, setData] = useState({
    email: "",
    password: "",
    
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: data.email,
      password: data.password
     
    };
    
    axios.post("http://localhost:5000/api/Login", userData).then((response) => {
      localStorage.setItem('token', response.data)
      setData({
        email: "",
        password: ""
      }) 
    }).catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
     
  };
  
  return (
    <div>
      <h3>Oturum Açın</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </label><br />
        <label htmlFor="password">
          Şifre
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </label><br />
        
        <button name= 'Oturum Aç' type="submit">Oturum Aç</button> 
      </form>
    </div>
  );
};

export default Login