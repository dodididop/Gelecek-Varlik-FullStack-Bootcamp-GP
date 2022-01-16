import './App.css';
import Login from "./Components/Login";
import ListFlatComponent from "./Components/Flat/ListFlatComponent";
import HeaderComponent from "./Components/Common/HeaderComponent";
import FooterComponent from "./Components/Common/FooterComponent";
import CreateFlatComponent from './Components/Flat/CreateFlatComponent';
import ViewFlatComponent from './Components/Flat/ViewFlatComponent';
import UpdateFlatComponent from './Components/Flat/UpdateFlatComponent'; 
import ListUserComponent from "./Components/User/ListUserComponent";
import ListPaymentComponent from "./Components/Payment/ListPaymentComponent";
import AddUser from "./Components/User/AddUser";

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route 
  } from "react-router-dom"; 

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Routes> 
                      <Route path = "/" exact element = {<ListFlatComponent/>}></Route>
                      <Route path = "/flats" element = {<ListFlatComponent/>}></Route>
                      <Route path = "/login" element = {<Login/>}></Route>
                      <Route path = "/add-flat" element = {<CreateFlatComponent/>}></Route>
                      <Route path = "/view-flat/:id" element = {<ViewFlatComponent/>}></Route>
                      <Route path = "/update-Flat/:id" element = {<UpdateFlatComponent/>}></Route> 
                      <Route path = "/addUser" element = {<AddUser/>}></Route> 
                      <Route path = "/users" element = {<ListUserComponent/>}></Route> 
                    </Routes>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  )
} 

export default App
