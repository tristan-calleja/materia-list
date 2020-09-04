import React, { Component } from "react";
import { Row, Form, Button, Container } from "react-bootstrap";

export default class Register extends Component {
  state = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  registerHandler = () => {
    this.props.register(this.state);
  };

  render() {
    return (
      <div>
          <Container>
            <h3>Register</h3>
              <Form>

                <Row className="mb-2 mt-4">
                  <strong> First Name </strong>
                  <Form.Control
                    name="firstname"
                    type="text"
                    onChange={this.changeHandler}
                  />
                </Row>
                <Row className="mb-2">
                  <strong> Last Name </strong>
                  <Form.Control
                    name="lastname"
                    type="text"
                    onChange={this.changeHandler}
                  />
                </Row>
                <Row className="mb-2">
                  <strong> Email </strong>
                  <Form.Control
                    name="email"
                    type="email"
                    onChange={this.changeHandler}
                  />
                </Row>
                <Row className="mb-4">
                  <strong> Password </strong>
                  <Form.Control
                    name="password"
                    type="password"
                    onChange={this.changeHandler}
                  />
                </Row>

                <Row>
                  <Button variant="dark" block onClick={this.registerHandler}>
                    {" "}
                    Register
                  </Button>
                </Row>

            </Form>
          </Container>
        </div>



      // <Form>
      //     <h3>Register</h3>

      //           <Form.Group>
      //               <Form.Label>First name</Form.Label>
      //               <Form.Control type="text" placeholder="First name" name="firstname" type="text" onChange={this.changeHandler} />
      //           </Form.Group>

      //           <Form.Group>
      //               <Form.Label>Last name</Form.Label>
      //               <Form.Control type="text" placeholder="Last name"  name="lastname" type="text" onChange={this.changeHandler} />
      //           </Form.Group>

      //           <Form.Group>
      //               <Form.Label>Email address</Form.Label>
      //               <Form.Control type="email" placeholder="Enter email" name="email" type="text" onChange={this.changeHandler} />
      //           </Form.Group>

      //           <Form.Group>
      //               <Form.Label>Password</Form.Label>
      //               <Form.Control type="password" placeholder="Enter password" name="password" type="text" onChange={this.changeHandler} />
      //           </Form.Group>

      //           <Button type="submit" className="btn-block" variant="dark" onClick={this.registerHandler}>Register</Button>
      //           <p className="forgot-password text-right">
      //               Already registered <a href="#">sign in?</a>
      //           </p>      
      //   </Form>

    );
  }
}