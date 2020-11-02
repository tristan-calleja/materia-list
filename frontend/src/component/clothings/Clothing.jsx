import React, { Component } from "react";
import Axios from "axios";
import EditClothing from "./EditClothing";
import { Container, Button } from "react-bootstrap";
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';
import {matchSorter} from 'match-sorter';
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
            <div className="mt-3 mb-3"> 
              <h3><strong>{clothing.brand}</strong> {"- "} {clothing.piece}</h3> 
              <Button onClick={this.showEdit} className="mt-2" size="sm" variant="info"> Edit Clothing </Button> 
            </div>
            <div className="mb-2"> <strong>Category:</strong> {clothing.category} </div>
            <div className="mb-2"> <strong>Priority:</strong> {clothing.priority} </div>
            <div className="mb-2"> <strong>Price:</strong> {clothing.price} </div>
            <div className="mb-2"> <strong>Notes:</strong> {clothing.notes} </div>
            <div className="mb-2">
                <a href={clothing.website} style={{display: "table-cell"}} target="_blank" rel="noopener noreferrer">
                    Website
                </a>
            </div>

            {edit && <EditClothing clothing={clothing} editClothing={this.editClothings} />}
          </div>
        ) : (
          "We are currently working on creating this feature. Please bear with us."
        )}
      </Container>
    );
  }
}