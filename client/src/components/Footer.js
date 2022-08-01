import React from "react";
import { Col, Row, Container } from "react-bootstrap";

function Footer() {
    return(
        <>
            <footer 
                className="footer bg-light text-muted mt-2 mb-0"
            >
                <section className="mb-2">
                    <Container>
                        <Row>
                            <Col className="mt-4 mb-2 text-uppercase fw-bold">
                                Sobre
                            </Col>
                            <Col className="mt-4 mb-2 text-uppercase fw-bold">
                                Contato
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                text sample
                            </Col>
                            <Col>
                                email@example.com
                            </Col>
                        </Row>
                    </Container>
                </section>
                <div className="text-center p-4" style={{backgroundColor: "rgba(0,0,0,0.05)"}}>Autodocs &copy; 2022 Copyright</div>
            </footer>
        </>
    )
}

export default Footer;