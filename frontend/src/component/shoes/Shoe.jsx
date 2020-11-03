import React, { Component } from "react";
import Axios from "axios";
import EditShoe from "./EditShoe";
import { Container, Button } from "react-bootstrap";
// import HighlightChange from "react-change-highlight";

const URL = process.env.REACT_APP_URL;

export default class Shoe extends Component {

  state = {
    shoe: null,
    edit: false,
  };

  showEdit = () => {
    this.setState((prevState) => ({ edit: !prevState.edit }));
  };

  editShoes = (obj, id) => {
    Axios.put(`${URL}/shoes/${id}`, obj)
      .then((res) => {
        console.log("done");
        //call method to call a re render
        this.getShoe();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getShoe = () => {
    console.log(this.props);
    Axios.get(`${URL}/shoes/${this.props.match.params.id}`)
      .then((res) => {
        // console.log(res.data);
        this.setState({ shoe: res.data.shoe });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getShoe();
  }

  render() {
    let { shoe, edit } = this.state;

    return (
      <Container className="mt-3">
        {shoe ? (
          <div>
            <div className="mt-3 mb-3"> 
              <h3><strong>{shoe.brand}</strong> {"- "} {shoe.piece}</h3> 
              <Button onClick={this.showEdit} className="mt-2" size="sm" variant="info"> Edit Shoes Details </Button> 
            </div>
            <div className="mb-2"> <strong>Category:</strong> {shoe.category} </div>
            <div className="mb-2"> <strong>Priority:</strong> {shoe.priority} </div>
            <div className="mb-2"> <strong>Price:</strong> {shoe.price} </div>
            <div className="mb-2"> <strong>Notes:</strong> {shoe.notes} </div>
            <div className="mb-2">
                <a href={shoe.website} style={{display: "table-cell"}} target="_blank" rel="noopener noreferrer">
                    Website
                </a>
            </div>

            {edit && <EditShoe shoe={shoe} editShoe={this.editShoes} />}
          </div>
        ) : (
          "We are currently working on creating this feature. Please bear with us."
        )}
      </Container>
    );
  }
}