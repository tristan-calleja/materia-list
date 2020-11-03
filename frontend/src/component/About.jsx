import React, { Component } from 'react';
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import clothing from '../images/clothing.png';

export default class About extends Component {

    // const navLeft = document.querySelector(".left");
    // const navRight = document.querySelector(".right");

    // const images = document.querySelector(".images");
    // const colors = document.querySelector(".colored-backgrounds");

    // let index = 0;

    // function right() {
    // transform((index = index < 3 ? ++index : 0));
    // }

    // function left() {
    // transform((index = index > 0 ? --index : 3));
    // }

    // navLeft.addEventListener("click", left);
    // navRight.addEventListener("click", right);

    // function transform(index) {
    // images.style.transform = `translateX(-${index * 100}%)`;
    // colors.style.transform = `translateX(-${index * 100}%)`;
    // }

    render() {

        return (
            <Container className="mt-5 mb-5">
                    <div className="content">
                        <div className="heading">
                        <h1>Materia-List</h1>
                        <Row>
                            <Col>
                                <p>
                                    Keep track of your shopping wishes.<br />
                                    Stop making impulsive purchases.<br />
                                    Be organised.<br />
                                    Buy Less, Buy Better.
                                </p>

                                <Button size="sm" variant="dark" className="mr-2">Clothing</Button>
                                <Button size="sm" variant="dark" className="mr-2">Shoes</Button>
                                <Button size="sm" variant="dark" className="mr-2">Watches</Button>
                                <Button size="sm" variant="dark" >Wines</Button>
                            </Col>

                            <Col>
                                <Image src={clothing}></Image>
                                
                            </Col>
                        </Row>
                        </div>
                    </div>

                    {/* <div className="wrapper">
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
                    </div> */}
                    
            </Container>
            
        )
    }
}
