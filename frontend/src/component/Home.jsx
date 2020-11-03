import React, { Component } from 'react';
import { Container, Card, CardColumns } from "react-bootstrap";
import budget from '../images/budget.png';
import wine from '../images/wine.png';
import clothing from '../images/clothing.png';
import watch from '../images/MKII.png';
import shoes from '../images/Ascot-Kaan-Shoes.jpg'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
                <Container className="homepage mt-5">
                    <CardColumns>
                        <Card>
                            <Card.Img variant="top" src={budget} />
                            <Card.Body>
                            <Card.Title className="heading">My Budget</Card.Title>
                            <Card.Text>
                                This will be the budget section - please bear with us
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="text-right">
                            <blockquote className="blockquote mb-0 card-body">
                            <p>
                            “If people don’t love or hate, the result of your work, then you haven’t done all that much.” 
                            </p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                <cite title="Source Title">Tinker Hatfield</cite>
                                </small>
                            </footer>
                            </blockquote>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={wine} />
                            <Card.Body>
                            <Card.Title className="heading">Wines</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Link to="/clothing" className="text-warning stretched-link" style={{ textDecoration: 'none' }}>
                            <Card.Img variant="top" src={clothing} />
                            <Card.Body>
                            <Card.Title className="heading">Clothing</Card.Title>
                            </Card.Body>
                            </Link >
                        </Card>
                        <Card className="p-3 text-right">
                            <blockquote className="blockquote mb-0 card-body">
                            <p>
                                “La perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à retirer.”
                            </p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                <cite title="Source Title">Antoine de Saint Exupéry</cite>
                                </small>
                            </footer>
                            </blockquote>
                        </Card>
                        <Card>
                            <Card.Body>
                            <Card.Title className="heading">Watches</Card.Title>
                            </Card.Body>
                            <Card.Img src={watch} />
                        </Card>
                        <Card className="text-right">
                            <blockquote className="blockquote mb-0 card-body">
                            <p>
                            “And those who were seen dancing were thought to be insane by those who could not hear the music.”
                            </p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                <cite title="Source Title">Frederick Nietzsche</cite>
                                </small>
                            </footer>
                            </blockquote>
                        </Card>
                        <Card>
                            <Link to="/shoe" className="text-warning stretched-link" style={{ color:"black" }}>
                            <Card.Img variant="top" src={shoes} />
                            <Card.Body>
                            <Card.Title className="heading">Shoes</Card.Title>
                            </Card.Body>
                            </Link >
                        </Card>
                    </CardColumns>
                </Container>
        )
    }
}
