import React, { Component } from "react";
import { Form, Button, Row, Container, Col } from "react-bootstrap";
import Axios from "axios";
import { Redirect } from "react-router-dom";

const URL = process.env.REACT_APP_URL;

class AddClothing extends Component {
  state = {
    brand: "",
    piece: "",
    category: "",
    priority: "",
    price: "",
    notes: "",
    website: "",
    status: false,
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    console.log(this.state);
    Axios.post(`${URL}/clothings`, this.state)
      .then((res) => {
        console.log("done");
        this.setState({ status: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let { brand, piece, category, priority, price, notes, website } = this.state;

    if (this.state.status) {
      return <Redirect to="/clothing" />;
    }

    return (
        <Container className="mt-3">
        
        <Row className="mb-3">
            <Col>
                <h3> Add a Clothing Item to your Wishlist </h3>
            </Col>
        </Row>

        <Row>
            <Col className="col-9">
                <div>
                    <Row className="mb-2">
                        <Form.Control
                        name="brand"
                        value={brand}
                        placeholder="Brand"
                        onChange={this.changeHandler}
                        />
                    </Row>
                    <Row className="mb-2">
                        <Form.Control
                        name="piece"
                        value={piece}
                        placeholder="Piece"
                        onChange={this.changeHandler}
                        />
                    </Row>
                    <Row className="mb-2">
                        <Form.Control
                        name="category"
                        value={category}
                        placeholder="Category"
                        onChange={this.changeHandler}
                        />
                    </Row>
                    <Row className="mb-2">
                        <Form.Control
                        name="priority"
                        value={priority}
                        placeholder="Priority"
                        onChange={this.changeHandler}
                        />
                    </Row>
                    <Row className="mb-2">
                        <Form.Control
                        name="price"
                        value={price}
                        placeholder="Price"
                        onChange={this.changeHandler}
                        />
                    </Row>
                    <Row className="mb-2">
                        <Form.Control
                        name="notes"
                        value={notes}
                        placeholder="Notes"
                        onChange={this.changeHandler}
                        />
                    </Row>
                    <Row className="mb-2">
                        <Form.Control
                        name="website"
                        value={website}
                        placeholder="Website Link"
                        onChange={this.changeHandler}
                        />
                    </Row>
                    <Row>
                        <Button onClick={this.submitHandler} className="mt-2" size="sm" variant="info">Add to my List</Button>
                    </Row>
                </div>
            </Col>
        </Row>
      </Container>
    );
  }
}

export default AddClothing;