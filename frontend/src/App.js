import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect, } from "react-router-dom";
import Home from "./component/Home";
import Clothing from "./component/clothings/Clothing";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import Navigation from "./component/Navigation";
import Axios from "axios";
// import AddTitle from "./component/titles/AddTitle";
// import { decode } from "jsonwebtoken";
// import PrivateRoute from "./component/PrivateRoute";
// import { Alert } from "react-bootstrap";
import './App.css';

const URL = process.env.REACT_APP_URL;

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Home />
      </Router>
    )
  }
}