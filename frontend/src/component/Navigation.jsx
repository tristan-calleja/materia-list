import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logomaterialistblack from '../images/logo-materia-list.png';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar className="color-nav" expand="lg" variant="light">
                    <Navbar.Brand href="/">
                        <img src={logomaterialistblack} style={{width:50, marginTop: -7}} alt="logo materialist" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {/* Remove home link at the end */}
                            <Link className="nav-link text-dark" to="/">
                                Home
                            </Link>
                            <Link className="nav-link text-dark" to="/clothing/something">
                                My Budget
                            </Link>
                            <Link className="nav-link text-dark" to="/clothing">
                                Clothing
                            </Link>
                            <Link className="nav-link text-dark" to="/clothing/something">
                                Shoes
                            </Link>
                            <Link className="nav-link text-dark" to="/clothing/something">
                                Watches
                            </Link>
                            <Link className="nav-link text-dark" to="/clothing/something">
                                Wines
                            </Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Link className="nav-link text-dark" to="/clothing/something">
                               <Button variant="outline-dark"> My Profile </Button>
                            </Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

//bg="light" expand="lg" variant="dark"