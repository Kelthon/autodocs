import React, { useState } from "react";
import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../contexts/authcontext";
import api from "../services/api";

function UserEditFormPage () {

    const navigate = useNavigate();
    const { authenticated, user } = useAuth();
    const [errors, setErrors] = useState();
    const [query, setQuery] = useState("");
    const [by, setBy] = useState("");
    const [siape, setSiape] = useState("");
    const [username, setUsername] = useState("");
    const [usermail, setUsermail] = useState("");
    const [usertitle, setUsertitle] = useState("");

    const searchUserForm = async event => {
        event.preventDefautl();
        // const res = await api.post(`/api/edit/user/?${query}&${by}`, {
            
        // });
        
    }

    return(
        <Container fluid="grid">
            <section>
                <Form onSubmit={searchUserForm}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Control type="search" placeholder="Procurar Usuário" onChange={event => { setQuery(event.target.value) }}/>
                                    </Col>
                                    <Col>
                                        <Button type="submit" name="query" variant="success">Search</Button>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Label>Procurar Por:</Form.Label>
                                        </Col>
                                        <Col>
                                            <Form.Select name="by">
                                                <option value="username">Nome</option>
                                                <option value="usersiape">Siape</option>
                                                <option value="userid">Id</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </section>
            {/* <section>
                <ul>
                    {errors}
                </ul>
            </section>
            <section>
            <Form onSubmit={handleForm}>
                <h1 className="mt-4">Edição de usuários</h1>
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
                        <Button variant="success" className="mt-5" type="submit">Editar</Button>
                </div>
            </Form>
            </section> */}
        </Container>
    );
}

export default UserEditFormPage;