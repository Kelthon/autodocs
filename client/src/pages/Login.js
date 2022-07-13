import React from "react"
import {
    Button,
    Form,
    Container,
} from "react-bootstrap"

import api from "../services/api"

function Login() {
    
    const [siape, setSiape] = React.useState();
    const onSiape = ({target: {value}}) => setSiape(value)
    const onSubmitForm = event => {
        event.preventDefault();
        api.post("/api/login", { account: siape }).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log("Falha de autenticação\n")
        });
        onSiape();
    }

    return(
        <Container>
            <h1 className="mt-4">Login</h1>
            <Form onSubmit={onSubmitForm}>
                <Form.Group className="mb-3" controlId="formSiape">
                    <Form.Label>Siape</Form.Label>
                    <Form.Control onChange={onSiape} value={siape} type="text" placeholder="Siape" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Entrar
                </Button>
            </Form>
        </Container>
    );
}

export default Login;