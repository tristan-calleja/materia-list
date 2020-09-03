import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect, } from "react-router-dom";
import Home from "./component/Home";
import AllClothing from "./component/clothings/AllClothing";
import Clothing from "./component/clothings/Clothing";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import UserProfile from "./component/user/UserProfile";
import Navigation from "./component/Navigation";
import About from "./component/About";
import Axios from "axios";
import AddClothing from './component/clothings/AddClothing';
import { decode } from "jsonwebtoken";
import PrivateRoute from "./component/PrivateRoute";
import { Alert } from "react-bootstrap";
import './App.css';


const URL = process.env.REACT_APP_URL;

export default class App extends Component {

  state = {
    // clothings: [],
    errorMessage: null,
    isAuth: false,
    user: null,
  };

  logoutHandler = (e) => {
    e.preventDefault();
    console.log("i logged out");
    this.setState({
      // clothings: [],
      errorMessage: null,
      isAuth: false,
      user: null,
    });

    localStorage.removeItem("token");
  };

  getUserProfile = (token) => {
    Axios.get(`${URL}/auth/user`, {
      headers: {
        "x-auth-token": token,
      },
    })
      .then((res) => {
        // console.log(res.data);

        this.setState({
          isAuth: true,
          user: res.data.user,
        });
      })
      .catch((err) => {
        // console.log(err);
        // this.setState({
        //   isAuth: false,
        // });
      });
  };

  loginHandler = (credentials) => {
    //login here
    Axios.post(`${URL}/auth/login`, credentials)
      .then((res) => {
        console.log(res.data);

        localStorage.setItem("token", res.data.token);
        this.getUserProfile(res.data.token); //get uptodate user information

        this.setState({
          isAuth: true,
        });
      })
      .catch((err) => {
        // console.log(err);
        this.setState({
          isAuth: false,
          errorMessage: err.response.data.message,
        });
      });
  };

  registerHandler = (credentials) => {
    //login here
    Axios.post(`${URL}/auth/register`, credentials)
      .then((res) => {
        console.log(res.data);

        localStorage.setItem("token", res.data.token);
        this.setState({
          isAuth: true,
        });
      })
      .catch((err) => {
        // console.log(err);
        this.setState({
          isAuth: false,
        });
      });
  };

  componentDidMount() {
    let token = localStorage.getItem("token");

    if (!(token == null)) {
      let decodedToken = decode(token);

      if (!decodedToken) {
        localStorage.removeItem("token");
      } else {
        this.getUserProfile(token);
        // this.setState({
        //   isAuth: true,
        // });
      }
    }
  }

  render() {
    let { isAuth, user, errorMessage } = this.state;
    return (
      <div className="App">
        <Router>
          <Navigation user={user} logout={this.logoutHandler} />
          {errorMessage && <Alert>{errorMessage}</Alert>}

            <Switch>

              <PrivateRoute exact path="/" isAuth={isAuth} component={Home} />
              {/* <Route path="/" exact render={() => <Home />} /> */}

              {/* <PrivateRoute
                exact
                path="/item/add"
                isAuth={isAuth}
                component={AddItem}
              /> */}

              <PrivateRoute exact path="/clothing" isAuth={isAuth} component={AllClothing} />
              {/* <Route path="/clothing" exact render={() => <AllClothing />} /> */}

              <PrivateRoute exact path="/clothing/:id" isAuth={isAuth} component={Clothing} />
              {/* <Route path="/clothing/:id" exact render={(props) => <Clothing {...props} />} /> */}

              <PrivateRoute exact path="/clothings/add" isAuth={isAuth} component={AddClothing} />
              {/* <Route path="/clothings/add" exact render={() => <AddClothing />} /> */}

              <PrivateRoute exact path="/user" isAuth={isAuth} component={UserProfile} />

              <PrivateRoute exact path="/about" isAuth={isAuth} component={About} />
              
              <Route
                path="/register"
                exact
                render={() => <Register register={this.registerHandler} />}
              />
              <Route
                path="/login"
                exact
                render={() =>
                  isAuth ? <Redirect to="/" /> : <Login login={this.loginHandler} />
                }
              />

          </Switch>

        </Router>
      </div>
    )
  }
}