import React from "react";
import { Link } from "react-router-dom"
import { Card, CardGroup, Container } from "react-bootstrap"

function Doclist() {
    return(
        <>
            <Container display="fluid">
            <Link to="/new/doc/tcc">Criar documentos para trabalho de conclusão de curso I</Link>
                <div>
                    <h1>Lista</h1>
                    <CardGroup>
                        <Card></Card>
                    </CardGroup>
                </div>
            </Container>
        </>
    );
}

export default Doclist;