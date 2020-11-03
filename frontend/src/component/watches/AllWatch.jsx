import React, { Component } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

const URL = process.env.REACT_APP_URL;

export default class AllWatch extends Component {
  
    state = {
    watches: [],
    };
    
  fetchWatches = () => {
    let token = localStorage.getItem("token");

    Axios.get(`${URL}/watches`, {
      headers: {
        "x-auth-token": token,
      },
    })
      .then((res) => {
        this.setState({ watches: res.data.watches });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteWatch = (e) => {
    Axios.delete(`${URL}/watches/${e.target.id}`).then((res) => {
      this.fetchWatches();
    });
  };

  componentDidMount() {
    this.fetchWatches();
  }

  render() {

    

    return (
      <div className="mt-3">
        <Container fluid className="mb-2">
            <Row>
                <Col className="col-4">
                    <h3  className="heading">Your Watch Wishlist</h3>
                </Col>
                <Col className="col-6">
                </Col>
                <Col className="col-2">
                <Link className="nav-link" to="/watches/add">
                    <Button variant="info">
                        Add To List
                    </Button>
                </Link>
                </Col>
            </Row>
        </Container >
        
        
          <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th> Brand </th>
                <th> Piece </th>
                <th> Category </th>
                <th> Priority </th>
                <th> Price </th>
                <th> Notes </th>
                <th> Website </th>
                <th> Actions </th>
                </tr>
            </thead>
            <tbody>
                {this.state.watches.map((watch) => (
                    <tr key={watch._id}>
                    <td> {watch.brand} </td>
                    <td> {watch.piece} { } <Link to={`/watch/${watch._id}`}>Details</Link> </td>
                    <td> {watch.category} </td>
                    <td> {watch.priority} </td>
                    <td> {watch.price} </td>
                    <td> {watch.notes} </td>
                    <td>
                        <a href={watch.website} style={{display: "table-cell"}} target="_blank" rel="noopener noreferrer">
                            Visit
                        </a>
                    </td>
                    <td>
                        <Button
                            onClick={this.deleteWatch}
                            variant="danger"
                            id={watch._id}
                            size="sm"
                        >
                            Delete
                      </Button>
                    </td>
                    </tr>
                ))}
              </tbody>
          </Table>

      </div>
    );
  }
}





