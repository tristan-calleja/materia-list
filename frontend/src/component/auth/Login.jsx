import React, { Component } from "react";
import { Row, Form, Button, Container } from "react-bootstrap";

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
        <h1>Login</h1>
        <div>
          <Container>
          <form>
            <Row>
              <Form.Control
                name="email"
                type="email"
                autoComplete="off"
                onChange={this.changeHandler}
              />
            </Row>
            <Row>
              <Form.Control
                name="password"
                type="password"
                autoComplete="off"
                onChange={this.changeHandler}
              />
            </Row>
            <Button variant="primary" block onClick={this.loginHandler}>
              {" "}
              Login
            </Button>
            </form>
          </Container>
        </div>
      </div>
    );
  }
}