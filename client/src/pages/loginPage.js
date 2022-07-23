import React, { useContext, useState } from "react"
import { Button, Form, Container} from "react-bootstrap"
import { useNavigate } from "react-router-dom";

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
        <Container>
            <h1 className="mt-4">Login</h1>
            <Form onSubmit={onSubmitForm}>
                <Form.Group className="mb-3" controlId="formSiape">
                    <Form.Label>Siape</Form.Label>
                    <Form.Control onChange={onAccount} defaultValue={siape} type="text" placeholder="Siape" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Entrar
                </Button>
            </Form>
        </Container>
    );
}

export default LoginPage;