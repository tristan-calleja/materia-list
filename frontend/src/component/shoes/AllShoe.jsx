import React, { Component } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

const URL = process.env.REACT_APP_URL;

export default class AllShoe extends Component {
  
    state = {
    shoes: [],
    };

  fetchShoes = () => {
    let token = localStorage.getItem("token");

    Axios.get(`${URL}/shoes`, {
      headers: {
        "x-auth-token": token,
      },
    })
      .then((res) => {
        this.setState({ shoes: res.data.shoes });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteShoe = (e) => {
    // console.log(e.target.id);
    Axios.delete(`${URL}/shoes/${e.target.id}`).then((res) => {
      this.fetchShoes();
    });
  };

  componentDidMount() {
    this.fetchShoes();
  }

  render() {

    

    return (
      <div className="mt-3">
        <Container fluid className="mb-2">
            <Row>
                <Col className="col-4">
                    <h3  className="heading">Your Shoes Wishlist</h3>
                </Col>
                <Col className="col-6">
                </Col>
                <Col className="col-2">
                <Link className="nav-link" to="/shoes/add">
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
                {/* <th> # </th> */}
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
                {this.state.shoes.map((shoe) => (
                    <tr key={shoe._id}>
                    {/* <td> {shoe._id} </td> */}
                    <td> {shoe.brand} </td>
                    <td> {shoe.piece} { } <Link to={`/shoe/${shoe._id}`}>Details</Link> </td>
                    <td> {shoe.category} </td>
                    <td> {shoe.priority} </td>
                    <td> {shoe.price} </td>
                    <td> {shoe.notes} </td>
                    <td>
                        <a href={shoe.website} style={{display: "table-cell"}} target="_blank" rel="noopener noreferrer">
                            Visit
                        </a>
                    </td>
                    <td>
                        <Button
                            onClick={this.deleteClothing}
                            variant="danger"
                            id={shoe._id}
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





