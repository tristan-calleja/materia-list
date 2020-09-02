import React, { Component } from 'react';
import { Button, Row, Col, Label, Form, Container } from "react-bootstrap";

export default class EditProfile extends Component {

    // state = {
    //     firstname: this.props.user.firstname,
    //     lastname: this.props.user.lastname,
    //     username: this.props.user.username,
    //     email: this.props.user.email,
    //     country: this.props.user.country,
    //     about: this.props.user.about,
    //     // image: this.props.user.image,
    //   };
    
    //   changeHandler = (e) => {
    //     //allow a re render in clothing.jsx
    //     console.log("Updated to: " + e.target.value);
    //     this.setState({ [e.target.name]: e.target.value });
    //   };
    
    //   submitHandler = () => {
    //     console.log(this.props.editUser);
    //     this.props.editUser(this.state, this.props.user._id);
    //   };

        CheckThisProps = () => {
            console.log(this.props);
        }

    render() {

        // Don't forget to add the picture once figured out!
        // let { firstname, lastname, username, email, country, about } = this.state;

        return (
            <div>
                <Container className="mt-3">
                <Row>
                    <Col>
                        <h4> Edit User Profile </h4>
                        <Button onClick={this.CheckThisProps} className="mt-2" size="sm">Submit</Button>
                    </Col>
                </Row>

                {/* <Row>
                    <Col className="col-9">
                        <div>
                            <Row>
                                <Form.Control
                                name="firstname"
                                value={firstname}
                                onChange={this.changeHandler}
                                />
                            </Row>
                            <Row>
                                <Form.Control
                                name="lastname"
                                value={lastname}
                                onChange={this.changeHandler}
                                />
                            </Row>
                            <Row>
                                <Form.Control
                                name="username"
                                value={username}
                                onChange={this.changeHandler}
                                />
                            </Row>
                            <Row>
                                <Form.Control
                                name="email"
                                value={email}
                                onChange={this.changeHandler}
                                />
                            </Row>
                            <Row>
                                <Form.Control
                                name="country"
                                value={country}
                                onChange={this.changeHandler}
                                />
                            </Row>
                            <Row>
                                <Form.Control
                                name="about"
                                value={about}
                                onChange={this.changeHandler}
                                />
                            </Row>
                            {/* <Row>
                                <Form.Control
                                name="image"
                                value={image}
                                onChange={this.changeHandler}
                                />
                            </Row> 
                            <Row>
                                <Button onClick={this.submitHandler} className="mt-2" size="sm">Submit</Button>
                            </Row>
                        </div>
                    </Col>
                </Row> */}

                </Container>
            </div>
        )
    }
}
