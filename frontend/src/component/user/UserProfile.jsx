import React, { Component } from 'react';
import { Tabs, Tab, Row, Col, Label, Form, Container, Image } from "react-bootstrap";
import Axios from "axios";
import EditProfile from './EditProfile';
import { decode } from "jsonwebtoken";
import defaultPic from './default-profile-pic.png';

const URL = process.env.REACT_APP_URL;

export default class UserProfile extends Component {

    state = {
      user: null,
    };

    //NEED TO PASS MY PROPS HERE SOMEWHERE SO I CAN USE THEM IN EDIT?
    editUser = (obj) => {
      Axios.put(`${URL}/user`, obj)
        .then((res) => {
          console.log("done");
          //call method to call a re render
          this.getUserProfile();
        })
        .catch((err) => {
          console.log(err);
        });
    };


    getUserProfile = (token) => {
      Axios.get(`${URL}/auth/user`, {
        headers: {
          "x-auth-token": token,
        },
      })
        .then((res) => {
          console.log(res.data);
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
  

    // ******** VERSION BELOW NOT WORKING ******** 

    // state = {
    //   user: null,
    //   edit: false,
    // };

    // showEdit = () => {
    //   this.setState((prevState) => ({ edit: !prevState.edit }));
    // };

    // editUser = (obj, id) => {
    //   Axios.put(`${URL}/user`, obj)
    //     .then((res) => {
    //       console.log("done");
    //       //call method to call a re render
    //       this.getUser();
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };

    // getUser = () => {
    //   // console.log(this.props);
    //   // Axios.get(`${URL}/clothings/${this.props.match.params.id}`)
    //   Axios.get(`${URL}/user`)
    //     .then((res) => {
    //       console.log(res.data);
    //       // this.setState({ user: res.data.user });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
  
    // componentDidMount() {
    //   this.getUser();
    // }

    render() {

      let { user, edit } = this.state;

        return (
            <div>
                <div className="mt-3 mb-4 ml-4 heading">
                  {user ? (
                    <h1>Welcome <i>{user.firstname} {user.lastname}</i> </h1>
                  ) : (
                    <h1>There is no user to show which is impossible</h1>
                  )}
                </div>

                <Container> 
                  <Tabs defaultActiveKey="User Profile" id="uncontrolled-tab-example">

                    <Tab eventKey="User Profile" title="My Profile">

                      <Container className="mt-3 mb-3">
                        {user ? (
                          <div>
                            {/* <h1>There is a user</h1> */}
                            <Container>
                              <Row>

                                <Col className="col-5">
                                  {/* PUT A TERNARY FOR DEFAULT IF IMG=NULL AND IMAGE IF THERE IS ONE TIED TO USER */}
                                  <Image src={defaultPic} className="profilePic" rounded />
                                </Col>

                                <Col className="col-7">
                                  <div className="mb-2"> <strong><u>First name:</u></strong> {user.firstname} </div>
                                  <div className="mb-2"> <strong><u>Last name:</u></strong> {user.lastname}</div>
                                  <div className="mb-2"> <strong><u>Username:</u></strong> {user.username}</div>
                                  <div className="mb-2"> <strong><u>Email:</u></strong> {user.email}</div>
                                  <div className="mb-2"> <strong><u>Country:</u></strong> {user.country}</div>
                                  <div className="mb-2"> <strong><u>About:</u></strong> {user.about}</div>
                                </Col>

                              </Row>
                            </Container>

                            {/* <Button onClick={this.showEdit} className="mt-2" size="sm"> Edit User Info </Button>
                            {edit && <EditProfile user={user} editUser={this.editUser} />} */}
                          </div>

                        ) : (
                          <h1>Again, there is no user to show which is impossible</h1>
                        )}
                      </Container>
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
