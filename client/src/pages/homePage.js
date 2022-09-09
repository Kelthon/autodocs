import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.png"

function HomePage() {

    return(
        <Container fluid="flex mt-2 mb-5">
            <Row className="d-flex justify-content-center">
                <Col>
                    <h1 className="mt-4">Início</h1>
                    <CardGroup>
                        <Link  className="text-decoration-none" to="/new/doc" >
                            <Card className="text-center" style={{width: "375px"}}>
                                <Card.Body>
                                    <Card.Img className="rounded img-thumbnail w-50 border-0" variant="top" src={logo}/>
                                    <Card.Title>
                                        Criar novo documento
                                    </Card.Title>
                                    <Card.Text>
                                        Trabalho de conclusão de curso I
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;