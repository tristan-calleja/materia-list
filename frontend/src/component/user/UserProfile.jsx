import React, { Component } from 'react';
import { Tabs, Tab, Row, Col, Label, Form, Container } from "react-bootstrap";
import Axios from "axios";
import EditProfile from './EditProfile';

const URL = process.env.REACT_APP_URL;

export default class UserProfile extends Component {

    // fetchUserData = () => {
    //     let token = localStorage.getItem("token");
    
    //     Axios.get(`${URL}/user`, {
    //       headers: {
    //         "x-auth-token": token,
    //       },
    //     })
    //       .then((res) => {
    //         console.log("Quelque chose");
    //         console.log(this.props);
    //         // this.setState({ user: res.data.user });
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   };

    //   componentDidMount() {
    //     this.fetchUserData();
    //   }

    render() {
        return (
            <div>
                <div className="mt-3 mb-2">
                <h1>User Profile</h1>
                </div>

                <Container> 
                <Tabs defaultActiveKey="User Profile" id="uncontrolled-tab-example">

                  <Tab eventKey="User Profile" title="My Profile">
                    <h4> User Profile </h4>
                  </Tab>
                  <Tab eventKey="edit" title="Edit">
                    <EditProfile />
                  </Tab>
                  <Tab eventKey="Something Else?" title="Something Else?" disabled>
                    {/* <Sonnet /> */}
                  </Tab>

                </Tabs>
                </Container>
            </div>
        );
    }
}
