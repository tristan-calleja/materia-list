import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  loginHandler = () => {
    //login here
    this.props.login(this.state);
  };

  render() {
    return (
        <div>
          <Container>
            <h3>Login</h3>
                <Form>
                  <Row className="mb-2 mt-4">
                    <strong> Email </strong>
                    <Form.Control
                      name="email"
                      type="email"
                      autoComplete="off"
                      onChange={this.changeHandler}
                    />
                  </Row>
                  <Row className="mb-2">
                    <strong> Password </strong>
                    <Form.Control
                      name="password"
                      type="password"
                      autoComplete="off"
                      onChange={this.changeHandler}
                    />
                  </Row>

                  <Row className="mb-3">
                    <Form.Group>
                      <div className="custom-control custom-checkbox">
                        <Form.Control type="checkbox" className="custom-control-input" id="customCheck1" />
                        <Form.Label className="custom-control-label" htmlFor="customCheck1">Remember me</Form.Label>
                      </div>
                    </Form.Group>
                  </Row>

                  <Row>
                    <Col>
                      <Button variant="dark" block onClick={this.loginHandler}>
                        {" "}
                        Login
                      </Button>
                      </Col>
                      <Col>
                      <Link to="/register">
                        <Button variant="outline-dark" block >
                            {" "}
                            Register
                        </Button>
                      </Link>
                    </Col>
                  </Row>

                  <Row>
                    <p className="forgot-password text-right">
                        Forgot <a href="https://www.google.com">password?</a>
                    </p>
                  </Row>

                </Form>
              
              
          </Container>
        </div>


    //   <Form>
    //     <h3>Login</h3>

    //     <Form.Group>
    //         <Form.Label>Email address</Form.Label>
    //         <Form.Control name="email" type="email" className="form-control" placeholder="Enter email" autoComplete="off" onChange={this.changeHandler} />
    //     </Form.Group>

    //     <Form.Group>
    //         <Form.Label>Password</Form.Label>
    //         <Form.Control name="password" type="password" className="form-control" placeholder="Enter password" autoComplete="off" onChange={this.changeHandler} />
    //     </Form.Group>

    //     <Form.Group>
    //         <div className="custom-control custom-checkbox">
    //             <Form.Control type="checkbox" className="custom-control-input" id="customCheck1" />
    //             <Form.Label className="custom-control-label" htmlFor="customCheck1">Remember me</Form.Label>
    //         </div>
    //     </Form.Group>

    //     <Button type="submit" className="btn-block" variant="dark" onClick={this.loginHandler}>Login</Button>
        
        
    //  </Form>


    );
  }
}