import React, { Component } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

export default class EditWatch extends Component {
  state = {
    brand: this.props.watch.brand,
    piece: this.props.watch.piece,
    category: this.props.watch.category,
    priority: this.props.watch.priority,
    price: this.props.watch.price,
    notes: this.props.watch.notes,
    website: this.props.watch.website,
  };

  changeHandler = (e) => {
    //allow a re render in watch.jsx
    console.log("Updated to: " + e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    console.log(this.props.editWatch);
    this.props.editWatch(this.state, this.props.watch._id);
  };

  render() {
    let { brand, piece, category, priority, price, notes, website } = this.state;
    return (
      <Container className="mt-3">
        
        <Row>
                <h3>Edit Watch Details</h3>
        </Row>

                <Row>
                  <Col className="col-5">
                    <Row  className="mb-2">
                      <strong>Brand</strong>
                        <Form.Control
                        name="brand"
                        value={brand}
                        onChange={this.changeHandler}
                        />
                    </Row>
                    <Row className="mb-2">
                    <strong>Piece</strong>
                        <Form.Control
                        name="piece"
                        value={piece}
                        onChange={this.changeHandler}
                        />
                    </Row>
                    <Row className="mb-2">
                    <strong>Category</strong>
                        <Form.Control
                        name="category"
                        value={category}
                        onChange={this.changeHandler}
                        />
                    </Row>
                    <Row className="mb-2">
                    <strong>Priority</strong>
                        <Form.Control
                        name="priority"
                        value={priority}
                        onChange={this.changeHandler}
                        />
                    </Row>
                  </Col>

                  <Col className="col-1"></Col>
                    

                  <Col className="col-5">
                    <Row className="mb-2">
                    <strong>Price</strong>
                        <Form.Control
                        name="price"
                        value={price}
                        onChange={this.changeHandler}
                        />
                    </Row>
                    <Row className="mb-2">
                    <strong>Notes</strong>
                        <Form.Control
                        name="notes"
                        value={notes}
                        onChange={this.changeHandler}
                        as="textarea" rows="4"
                        />
                    </Row>
                    <Row className="mb-2">
                    <strong>Website</strong>
                        <Form.Control
                        name="website"
                        value={website}
                        onChange={this.changeHandler}
                        />
                    </Row>
                    <Row>
                      <Button onClick={this.submitHandler} className="mt-2 ml-auto"  variant="info">Update</Button>
                    </Row>
                  </Col>
                </Row>



      </Container>
    );
  }
}