import React, { Component } from "react";
import Axios from "axios";
import EditClothing from "./EditClothing";
import { Container, Button } from "react-bootstrap";
// import HighlightChange from "react-change-highlight";

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
      <Container className="mt-3">
        {clothing ? (
          <div>
            <div> <h3><strong>{clothing.brand}</strong> {"- "} {clothing.piece}</h3> </div>
            <div> Category: {clothing.category} </div>
            <div> Priority: {clothing.priority} </div>
            <div> Price: {clothing.price} </div>
            <div> Notes: {clothing.notes} </div>
            <div>
                <a href={clothing.website} style={{display: "table-cell"}} target="_blank" rel="noopener noreferrer">
                    Website
                </a>
            </div>

            <Button onClick={this.showEdit} className="mt-2" size="sm"> Edit Clothing </Button>
            {edit && <EditClothing clothing={clothing} editClothing={this.editClothings} />}
          </div>
        ) : (
          "Nothing to show man"
        )}
      </Container>
    );
  }
}