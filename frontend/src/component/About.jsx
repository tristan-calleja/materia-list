import React, { Component } from 'react';
import { Tabs, Tab, Row, Col, Label, Form, Container, Image, Button } from "react-bootstrap";

export default class About extends Component {
    render() {
        return (
            <Container>
                    <div className="content">
                        <div className="heading">
                        <h1>Materia-List</h1>
                        <p>
                            A portrait is a painting, photograph,<br />
                            sculpture, or other artistic representation<br />
                            of a person, in which the face and its<br />
                            expression is predominant.
                        </p>
                        <Button size="sm" className="mr-2">Clothing</Button>
                        <Button size="sm" className="mr-2">Shoes</Button>
                        <Button size="sm" className="mr-2">Watches</Button>
                        <Button size="sm">Wines</Button>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="images">
                            <div className="image"></div>
                            <div className="image"></div>
                            <div className="image"></div>
                            <div className="image"></div>
                        </div>
                    </div>
                    <div className="navigation">
                        <div className="right">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-right" width="26" height="26" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="9 6 15 12 9 18" />
                        </svg>
                        </div>
                        <div className="left">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-left" width="26" height="26" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="15 6 9 12 15 18" />
                        </svg>
                        </div>
                    </div>
            </Container>
            
        )
    }
}
