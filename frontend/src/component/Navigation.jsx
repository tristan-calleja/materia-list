import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logomaterialistblack from '../images/logo-materia-list.png';

function Navigation({ user, logout }) {
        return (
            <div>
                <Navbar className="color-nav" expand="lg" variant="light">
                    <Navbar.Brand href="/">
                        <img src={logomaterialistblack} style={{width:50, marginTop: -7}} alt="logo materialist" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="mr-auto">
                            {user ? (
                            <>
                            <Link className="nav-link text-dark" to="/about">
                                About
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
                            </>
                            ) : (
                            <> <h3> Welcome to Materia-List </h3></>
                            )}
                        </Nav>
                        
                        <Nav className="ml-auto">
                        {user ? (
                        <>
                            <Link className="nav-link text-dark" to="/user">
                               <Button variant="outline-dark"> My Profile </Button>
                            </Link>

                            <Link className="nav-link text-dark" to="/clothing/something">
                                <Button variant="outline-dark">  My Budget </Button>
                            </Link>

                            <Link to="/logout" onClick={logout} className="nav-link">
                                <Button variant="dark"> Logout </Button>
                            </Link>

                        </>
                        ) : (
                        <>
                            <Link to="/login" className="nav-link">
                                <Button variant="outline-dark"> Login </Button>
                            </Link>
                            <Link to="/register" className="nav-link">
                                <Button variant="dark"> Register </Button>
                            </Link>
                        </>
                        )}
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }

export default Navigation;

//bg="light" expand="lg" variant="dark"