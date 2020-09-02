import React, { Component } from 'react';
import { Container, Card, CardColumns } from "react-bootstrap";
import budget from '../images/budget.png';
import wine from '../images/wine.png';
import clothing from '../images/clothing.png';
import watch from '../images/MKII.png';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
                <Container className="homepage mt-5">
                    <CardColumns>
                        <Card>
                            <Card.Img variant="top" src={budget} />
                            <Card.Body>
                            <Card.Title>My Budget</Card.Title>
                            <Card.Text>
                                This will be the budget section
                            </Card.Text>
                            </Card.Body>
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
                            <Card.Img variant="top" src={wine} />
                            <Card.Body>
                            <Card.Title>Wines</Card.Title>
                            <Card.Text>
                                This will be the budget section
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            {/* <a href="/clothing" class="text-warning stretched-link"> */}
                            <Link to="/clothing" className="text-warning stretched-link">
                            <Card.Img variant="top" src={clothing} />
                            <Card.Body>
                            <Card.Title>Clothing</Card.Title>
                            <Card.Text>
                                This will be the clothing section.{' '}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                            {/* </a> */}
                            </Link >
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
                            <Card.Body>
                            <Card.Title>Watches</Card.Title>
                            <Card.Text>
                                This will be the watch section.{' '}
                            </Card.Text>
                            </Card.Body>
                            <Card.Img src={watch} />
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
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
                            <Card.Body>
                            <Card.Title>Shoes</Card.Title>
                            <Card.Text>
                                This will be the shoes section
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </Container>
        )
    }
}
