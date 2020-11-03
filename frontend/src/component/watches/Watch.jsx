import React, { Component } from "react";
import Axios from "axios";
import EditWatch from "./EditWatch";
import { Container, Button } from "react-bootstrap";
// import HighlightChange from "react-change-highlight";

const URL = process.env.REACT_APP_URL;

export default class Watch extends Component {

  state = {
    watch: null,
    edit: false,
  };

  showEdit = () => {
    this.setState((prevState) => ({ edit: !prevState.edit }));
  };

  editWatches = (obj, id) => {
    Axios.put(`${URL}/watches/${id}`, obj)
      .then((res) => {
        console.log("done");
        //call method to call a re render
        this.getWatch();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getWatch = () => {
    console.log(this.props);
    Axios.get(`${URL}/watches/${this.props.match.params.id}`)
      .then((res) => {
        // console.log(res.data);
        this.setState({ watch: res.data.watch });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getWatch();
  }

  render() {
    let { watch, edit } = this.state;

    return (
      <Container className="mt-3">
        {watch ? (
          <div>
            <div className="mt-3 mb-3"> 
              <h3><strong>{watch.brand}</strong> {"- "} {watch.piece}</h3> 
              <Button onClick={this.showEdit} className="mt-2" size="sm" variant="info"> Edit Watches Details </Button> 
            </div>
            <div className="mb-2"> <strong>Category:</strong> {watch.category} </div>
            <div className="mb-2"> <strong>Priority:</strong> {watch.priority} </div>
            <div className="mb-2"> <strong>Price:</strong> {watch.price} </div>
            <div className="mb-2"> <strong>Notes:</strong> {watch.notes} </div>
            <div className="mb-2">
                <a href={watch.website} style={{display: "table-cell"}} target="_blank" rel="noopener noreferrer">
                    Website
                </a>
            </div>

            {edit && <EditWatch watch={watch} editWatch={this.editWatches} />}
          </div>
        ) : (
          "We are currently working on creating this feature. Please bear with us."
        )}
      </Container>
    );
  }
}