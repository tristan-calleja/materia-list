import React, { Component } from "react";
import { Form, Button, Row, Container, Col, Image } from "react-bootstrap";
import { decode } from "jsonwebtoken";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import defaultPic from './default-profile-pic.png';

const URL = process.env.REACT_APP_URL;

export default class EditProfile extends Component {

  state = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    country: "",
    about: "",
    // image: "",
    status: false,
  };

  getUserProfile = (token) => {
    Axios.get(`${URL}/auth/user`, {
      headers: { "x-auth-token": token },
    })
      .then((res) =>
        this.setState({
          firstname: res.data.user.firstname,
          lastname: res.data.user.lastname,
          username: res.data.user.username,
          email: res.data.user.email,
          country: res.data.user.country,
          about: res.data.user.about,
        //image: res.data.user.image,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = () => {
    //login here
    // this.props.edit(this.state, this.props.user.id);
    let token = localStorage.getItem("token");
    Axios.put(
      `${URL}/auth/user`,
      {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        username: this.state.username,
        email: this.state.email,
        country: this.state.country,
        about: this.state.about,
        //image: this.state.image,
      },
      {
        headers: { "x-auth-token": token },
      }
    )
      .then((res) => {
        console.log("done");
        this.getUserProfile(token);
        this.setState({ status: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount = () => {
    let token = localStorage.getItem("token");
    if (!(token == null)) {
      let decodedToken = decode(token);
      if (!decodedToken) {
        localStorage.removeItem("token");
      } else {
        this.getUserProfile(token);
      }
    }
  };
  render() {
    let { firstname, lastname, username, email, country, about } = this.state;
    console.log(this.state);
    if (this.state.status) {
      return <Redirect to="/" />;
      
    }
    return (
      <div>
        <div>
          <Container className="mb-4">
              <Row className="mb-2 mt-2">
                <h5><i>After editing your profile's details, you'll be redirected to the homepage</i></h5>
              </Row>
              <Row>
                        <Col className="col-5">
                            {/* PUT A TERNARY FOR DEFAULT IF IMG=NULL AND IMAGE IF THERE IS ONE TIED TO USER */}
                            <Image src={defaultPic} className="profilePic" rounded />
                        </Col>

                        <Col className="col-7">
                            <Row className="mb-2">
                                <strong>First name</strong>
                                <Form.Control
                                name="firstname"
                                type="text"
                                value={firstname}
                                onChange={this.changeHandler}
                                />
                            </Row>
                            <Row className="mb-2">
                                <strong>Last name</strong>
                                <Form.Control
                                name="lastname"
                                type="text"
                                value={lastname}
                                onChange={this.changeHandler}
                                />
                            </Row>
                            <Row className="mb-2">
                                <strong> Username </strong>
                                <Form.Control
                                name="username"
                                type="text"
                                value={username}
                                onChange={this.changeHandler}
                                />
                            </Row>
                            <Row className="mb-2">
                                <strong> Email </strong>
                                <Form.Control
                                name="email"
                                type="email"
                                value={email}
                                onChange={this.changeHandler}
                                />
                            </Row>
                            <Row className="mb-2">
                                <strong> Country </strong>
                                <Form.Control
                                name="country"
                                type="text"
                                value={country}
                                onChange={this.changeHandler}
                                />
                            </Row>
                            <Row className="mb-4">
                                <strong> About </strong>
                                <Form.Control
                                name="about"
                                type="text"
                                value={about}
                                onChange={this.changeHandler}
                                />
                            </Row>
                        {/* <Row className="mb-2">
                            Password:
                            <Form.Control
                                name="password"
                                type="password"
                                onChange={this.changeHandler}
                            />
                            </Row> */}

                    <Button variant="primary" block onClick={this.submitHandler}>
                        Update
                    </Button>

                </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}


// import React, { Component } from 'react';
// import { Button, Row, Col, Label, Form, Container } from "react-bootstrap";
// import Axios from "axios";

// export default class EditProfile extends Component {

//     // state = {
//     //     firstname: this.user.firstname,
//     //     lastname: this.user.lastname,
//     //     username: this.user.username,
//     //     email: this.user.email,
//     //     country: this.user.country,
//     //     about: this.user.about,
//     //     // image: this.props.user.image,
//     //   };

//     getUserProfile = (token) => {
//         Axios.get(`${URL}/auth/user`, {
//           headers: {
//             "x-auth-token": token,
//           },
//         })
//           .then((res) => {
//             console.log(res.data);
//             this.setState({
//               isAuth: true,
//               user: res.data.user,
//             });
//           })
//           .catch((err) => {
//             // console.log(err);
//             // this.setState({
//             //   isAuth: false,
//             // });
//           });
//       };
    
//     //   changeHandler = (e) => {
//     //     //allow a re render in clothing.jsx
//     //     console.log("Updated to: " + e.target.value);
//     //     this.setState({ [e.target.name]: e.target.value });
//     //   };
    
//     //   submitHandler = () => {
//     //     console.log(this.props.editUser);
//     //     this.props.editUser(this.state, this.props.user._id);
//     //   };

//         CheckThisProps = () => {
//             console.log(this.props);
//         }

//     render() {

//         // Don't forget to add the picture once figured out!
//         // let { firstname, lastname, username, email, country, about } = this.state;

//         return (
//             <div>
//                 <Container className="mt-3">
//                 <Row>
//                     <Col>
//                         <h4> Edit User Profile </h4>
//                         <Button onClick={this.submitHandler} className="mt-2" size="sm">Submit</Button>
//                     </Col>
//                 </Row>

//                 {/* <Row>
//                     <Col className="col-9">
//                         <div>
                            // <Row>
                            //     <Form.Control
                            //     name="firstname"
                            //     type="text"
                            //     value={firstname}
                            //     onChange={this.changeHandler}
                            //     />
                            // </Row>
                            // <Row>
                            //     <Form.Control
                            //     name="lastname"
                            //     type="text"
                            //     value={lastname}
                            //     onChange={this.changeHandler}
                            //     />
                            // </Row>
                            // <Row>
                            //     <Form.Control
                            //     name="username"
                            //     type="text"
                            //     value={username}
                            //     onChange={this.changeHandler}
                            //     />
                            // </Row>
                            // <Row>
                            //     <Form.Control
                            //     name="email"
                            //     type="email"
                            //     value={email}
                            //     onChange={this.changeHandler}
                            //     />
                            // </Row>
                            // <Row>
                            //     <Form.Control
                            //     name="country"
                            //     type="text"
                            //     value={country}
                            //     onChange={this.changeHandler}
                            //     />
                            // </Row>
                            // <Row>
                            //     <Form.Control
                            //     name="about"
                            //     type="text"
                            //     value={about}
                            //     onChange={this.changeHandler}
                            //     />
                            // </Row>
                            //  <Row>
                            //     <Form.Control
                            //     name="image"
                            //     value={image}
                            //     onChange={this.changeHandler}
                            //     />
                            // </Row> 
                            // <Row>
                            //     <Button onClick={this.submitHandler} className="mt-2" size="sm">Submit</Button>
                            // </Row>
//                         </div>
//                     </Col>
//                 </Row>

//                 </Container>
//             </div>
//         )
//     }
// }