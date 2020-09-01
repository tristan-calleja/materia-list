import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect, } from "react-router-dom";
import Home from "./component/Home";
import AllClothing from "./component/clothings/AllClothing";
import Clothing from "./component/clothings/Clothing";
// import Register from "./component/auth/Register";
// import Login from "./component/auth/Login";
import Navigation from "./component/Navigation";
// import Axios from "axios";
// import AddTitle from "./component/titles/AddTitle";
// import { decode } from "jsonwebtoken";
// import PrivateRoute from "./component/PrivateRoute";
// import { Alert } from "react-bootstrap";
import './App.css';

const URL = process.env.REACT_APP_URL;

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          
          <Switch>
          {/*<PrivateRoute exact path="/" isAuth={isAuth} component={Home} />
           <PrivateRoute
            exact
            path="/item/add"
            isAuth={isAuth}
            component={AddItem}
          /> */}

          <Route path="/" exact render={() => <Home />} />

          <Route path="/clothing" exact render={() => <AllClothing />} />

          {/* <Route path="/clothing/:id" exact render={(props) => <Clothing {...props} />} /> */}

          <Route
            exact
            path="/clothing/:id"
            component={Clothing}
          />

          {/* <Route path="/item/add" exact render={() => <AddItem />} />
          <PrivateRoute
            exact
            path="/item/:id"
            isAuth={isAuth}
            component={Item}
          /> */}
          {/* <Route path="/item/:id" component={Item} /> */}
          {/* <Route
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
          /> */}
        </Switch>



        </Router>
      </div>
    )
  }
}