import React, { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import {
    Button,
    Form,
    Container,
} from "react-bootstrap"

import api from "../services/api"

function Login() {
    
    const [siape, setSiape] = React.useState();
    const [logged, setLogged] = React.useState();
    const navigate = useNavigate()

    const onSiape = ({target: {value}}) => setSiape(value)
    const onSubmitForm = event => {
        event.preventDefault()
        
        api.post("/login", { account: siape }).then(res => {
            if(res.status == 200) {
                setLogged(true);
            }
        })
            
        onSiape();
    }
    
    useEffect(() => {
        if(logged) {
            return navigate("/");
        }
    }, []);

    return(
        <Container>
            <h1 className="mt-4">Login</h1>
            <Form onSubmit={onSubmitForm}>
                <Form.Group className="mb-3" controlId="formSiape">
                    <Form.Label>Siape</Form.Label>
                    <Form.Control onChange={onSiape} value={siape} type="text" placeholder="Siape" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Não sou um robô" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Entrar
                </Button>
            </Form>
        </Container>
    );
}

export default Login