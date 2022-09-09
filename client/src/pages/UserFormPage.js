import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

import api from "../services/api";
import ListErrors from "../components/ListErrors";

function UserFormPage() {

    const navigate = useNavigate();
    const [errors, setErrors] = useState();
    const [username, setUsername] = useState("");
    const [usermail, setUsermail] = useState("");
    const [siape, setSiape] = useState("");
    const [usertitle, setUsertitle] = useState("");

    const handleForm = async event => {
        event.preventDefault();

        const res = await api.post("/api/new/user", {
            username: username,
            usersiape: siape,
            usermail: usermail,
            usertitle: usertitle
        });

        if(res.data.errors) {
            setErrors(res.data.errors.map(i => {
                // <>
                {/* <Alert>{i}</Alert> */}
                <p>test</p>
                {/* </> */}
            }));
        // }
        // .then(res => {
        //     if(res.data.errors !== undefined ) {
        //         // setErrors(ListErrors(res.data.errors));
        //         res.data.error.map(i => {
        //             console.log(i);
        //         })
        //         setErrors(res.data.errors.map(i => {
        //             <Alert>{i}</Alert>
        //         }));
                
            } else {
                return navigate("/", { replace: true });
            }
        // })
    };

    return(
        <Container fluid="grid">
            <section>
                <ul>
                    {errors}
                </ul>
            </section>
            <section>
            <Form onSubmit={handleForm}>
                <h1 className="mt-4">Cadastro de novos usuários</h1>
                <Row>
                    <Col className="mt-2">
                        <Form.Group onChange={event => { setUsername(event.target.value) }}>
                            <Form.Label className="text-nowrap text-truncate">Nome completo<span className="text-danger">*</span></Form.Label>
                            <Form.Control defaultValue={username} type="text" placeholder="Nome completo"/>
                        </Form.Group>
                    </Col>

                </Row>
                <Row>
                    <Col className="mt-2">
                        <Form.Group onChange={event => { setUsermail(event.target.value) }}>
                            <Form.Label className="text-nowrap text-truncate">Email institucional<span className="text-danger">*</span></Form.Label>
                            <Form.Control defaultValue={usermail} type="text" placeholder="Email institucional"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-2">
                        <Form.Group onChange={event => { setUsertitle(event.target.value) }}>
                            <Form.Label className="text-nowrap text-truncate">Título<span className="text-danger">*</span></Form.Label>
                            <Form.Control defaultValue={usertitle} type="text" placeholder="Título"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-2">
                        <Form.Group onChange={event => { setSiape(event.target.value) }}>
                            <Form.Label className="text-nowrap text-truncate">Siape<span className="text-danger">*</span></Form.Label>
                            <Form.Control defaultValue={siape} type="text" placeholder="Siape"/>
                        </Form.Group>
                    </Col>
                </Row>
                
                <div className="vstack d-grid justify-content-center">
                        <Form.Text className="mt-3 text-center">Campos com (<span className="text-danger">*</span>) são obrigatórios</Form.Text>
                        <Button className="mt-5" type="submit">Criar</Button>
                </div>
            </Form>
            </section>
        </Container>
    );
}

export default UserFormPage;