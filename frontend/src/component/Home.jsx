import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";

export default class Home extends Component {
    render() {
        return (
                <Container className="homepage">
                    <Row className="text-center mt-5">
                        <Col className="col-4 homepage-mosaic" > <h1>Somehting</h1> </Col>
                        <Col className="col-4">
                            <h1>Somehting</h1>
                        </Col>
                        <Col className="col-4"><h1>Somehting</h1></Col>
                        <Col className="col-4"> <h1>Somehting</h1> </Col>
                        <Col className="col-4">
                            <h1>Somehting</h1>
                        </Col>
                        <Col className="col-4"> <h1>Somehting</h1> </Col>
                    </Row>
                </Container>
        )
    }
}
