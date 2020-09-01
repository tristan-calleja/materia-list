import React, { Component } from "react";
import { Form, Button, Row } from "react-bootstrap";

export default class EditClothing extends Component {
  state = {
    brand: this.props.clothing.brand,
    piece: this.props.clothing.piece,
    category: this.props.clothing.category,
    priority: this.props.clothing.priority,
    price: this.props.clothing.price,
    notes: this.props.clothing.notes,
    website: this.props.clothing.website,
  };

  changeHandler = (e) => {
    //allow a re render in clothing.jsx
    console.log("Updated to: " + e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    console.log(this.props);
    // this.props.EditClothing(this.state, this.props.clothing._id);
  };

  render() {
    let { brand, piece, category, priority, price, notes, website } = this.state;
    return (
      <div>
        <h1>Edit Clothing</h1>
        <div>
          <Row>
            <Form.Control
              name="brand"
              value={brand}
              onChange={this.changeHandler}
            />
          </Row>
          <Row>
            <Form.Control
              name="piece"
              value={piece}
              onChange={this.changeHandler}
            />
          </Row>
          <Row>
            <Form.Control
              name="category"
              value={category}
              onChange={this.changeHandler}
            />
          </Row>
          <Row>
            <Form.Control
              name="priority"
              value={priority}
              onChange={this.changeHandler}
            />
          </Row>
          <Row>
            <Form.Control
              name="price"
              value={price}
              onChange={this.changeHandler}
            />
          </Row>
          <Row>
            <Form.Control
              name="notes"
              value={notes}
              onChange={this.changeHandler}
            />
          </Row>
          <Row>
            <Form.Control
              name="website"
              value={website}
              onChange={this.changeHandler}
            />
          </Row>
          <Button onClick={this.submitHandler}>Submit</Button>
        </div>
      </div>
    );
  }
}