import React, { Component } from "react";
import Axios from "axios";
import EditClothing from "./EditClothing";
import { Container, Button } from "react-bootstrap";

const URL = process.env.REACT_APP_URL;

export default class Clothing extends Component {

  state = {
    clothing: null,
    edit: false,
  };

  showEdit = () => {
    this.setState((prevState) => ({ edit: !prevState.edit }));
  };

  editClothings = (obj, id) => {
    Axios.put(`${URL}/clothings/${id}`, obj)
      .then((res) => {
        console.log("done");
        //call method to call a re render
        this.getClothing();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getClothing = () => {
    console.log(this.props);
    Axios.get(`${URL}/clothings/${this.props.match.params.id}`)
      .then((res) => {
        // console.log(res.data);
        this.setState({ clothing: res.data.clothing });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getClothing();
  }

  render() {
    let { clothing, edit } = this.state;

    return (
      <Container>
        <h1>Single Clothing</h1>

        {clothing ? (
          <div>
            <div> <strong>{clothing.brand}</strong> {"- "} {clothing.piece} </div>
            <div> Category: {clothing.category} </div>
            <div> Priority: {clothing.priority} </div>
            <div> Price: {clothing.price} </div>
            <div> Notes: {clothing.notes} </div>
            <div> Website: {clothing.website} </div>

            <Button onClick={this.showEdit}>Edit Clothing</Button>
            {edit && <EditClothing clothing={clothing} editClothing={this.editClothings} />}
          </div>
        ) : (
          "Nothing to show man"
        )}
      </Container>
    );
  }
}