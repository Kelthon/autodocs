import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import RowRequest from "../components/RowRequest";

function RequestPage() {
    return (
        <Container display="fluid">
                <h1 className="my-5">Solicitações de novos documentos</h1>
                <div className="mb-5">
                <Row>
                    <Col className="border-bottom"><span className="font-weight-bold">Solicitação</span></Col>
                    <Col className="border-bottom"><span className="font-weight-bold">Data</span></Col>
                    <Col className="border-bottom"><span className="font-weight-bold">Tipo</span></Col>
                    <Col className="border-bottom"><span className="font-weight-bold">Autor</span></Col>
                    <Col className="border-bottom"><span className="font-weight-bold">Descrição</span></Col>
                </Row>

                 <RowRequest/>

                </div>
        </Container>
    );
}

export default RequestPage;