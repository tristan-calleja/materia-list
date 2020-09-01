import React, { Component } from "react";
import { Container, Row, Col, Button, Table, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";
// import EditClothing from "./EditClothing";
// import AddClothing from "./AddClothing";

const URL = process.env.REACT_APP_URL;

export default class AllClothing extends Component {
  
    state = {
    clothings: [],
  };

//   fetchClothings = () => {
//     let token = localStorage.getItem("token");

//     Axios.get(`${URL}/clothings`, {
//       headers: {
//         "x-auth-token": token,
//       },
//     })
//       .then((res) => {
//         this.setState({ clothings: res.data.clothings });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

  fetchClothings = () => {

    Axios.get(`${URL}/clothings`)
    //   console.log("it works or not?");
      .then((res) => {
        this.setState({ clothings: res.data.clothings });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteClothing = (e) => {
    // console.log(e.target.id);
    Axios.delete(`${URL}/clothings/${e.target.id}`).then((res) => {
      this.fetchClothings();
    });
  };

  componentDidMount() {
    this.fetchClothings();
  }

  render() {
    return (
      <div className="mt-3">
        <Container fluid className="mb-2">
            <Row>
                <Col className="col-4">
                    <h3>Your Clothing Wishlist</h3>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Search for a brand or a piece"
                        aria-label="Search for a brand or a piece"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                        <Button variant="outline-secondary"> Search </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
                <Col className="col-6">
                </Col>
                <Col className="col-2">
                    <Button variant="secondary">
                        Add Clothing to Set-Up
                    </Button>
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
                {this.state.clothings.map((clothing) => (
                    <tr key={clothing._id}>
                    {/* <td> {clothing._id} </td> */}
                    <td> {clothing.brand} </td>
                    <td> {clothing.piece} { } <Link to={`/clothing/${clothing._id}`}>Details</Link> </td>
                    <td> {clothing.category} </td>
                    <td> {clothing.priority} </td>
                    <td> {clothing.price} </td>
                    <td> {clothing.notes} </td>
                    <td> {clothing.website} </td>
                    <td>
                        <Button className="m-1" size="sm">
                            Edit to Set-Up
                        </Button>
                        <Button
                            onClick={this.deleteClothing}
                            variant="danger"
                            id={clothing._id}
                            size="sm"
                        >
                            Delete
                      </Button>
                    </td>
                    </tr>
                ))}
            </tbody>
            </Table>

        {/* <Container fluid>
          <Row>
            {this.state.clothings.map((clothing) => (
              <Col key={clothing._id} md="3" className="mb-3">
                <Card>
                  <Card.Body>
                    {item.name}
                    <div>
                      <Link to={`/item/${item._id}`}>See Item</Link>
                      <Button
                        onClick={this.deleteItem}
                        variant="danger"
                        id={item._id}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container> */}
      </div>
    );
  }
}