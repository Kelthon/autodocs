import React, { useContext, useState } from "react"
import { Button, Form, Container, Row, Col} from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";

import api from "../services/api"
import { AuthContext } from "../contexts/authcontext";

function LoginPage() {
    
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [siape, setSiape] = useState('');

    const onAccount = event => setSiape(event === undefined ? '' : event.target.value);

    const onSubmitForm = async event => {
        event.preventDefault();

        await api.post("/api/login", { account: siape }).then(res => {
            const { user, token } = res.data;
            if(user == null);
            else navigate("/", {replace: true});
            
            login(user.id, token);
        }).catch(err => {
            onAccount();
        });
    }

    return(
        <Container fluid="flex">
            <section className="Form my-5">
                <Row className="d-flex justify-content-center">
                    <Col as="div" className="col-sm-4">
                        <h1 className="mt-4 mb-3 text-center">Login</h1>
                        <Form onSubmit={onSubmitForm}>
                            <Form.Group className="mb-3" controlId="formSiape">
                                <Form.Label className="text-muted">Escreve o número do seu siape</Form.Label>
                                <Form.Control onChange={onAccount} defaultValue={siape} type="text" placeholder="Siape" />
                            </Form.Group>
                            <center>
                                <Button variant="primary" type="submit">Entrar</Button>
                            </center>
                        </Form>
                    </Col>
                </Row>
            </section>
        </Container>
    );
}

export default LoginPage;