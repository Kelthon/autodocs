import React from "react";
import { Button, Container, Form } from "react-bootstrap";

function TCCForm1() {
    return(
        <Container>
            <h1>Novo documento TCC 1</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Título do projeto</Form.Label>
                    <Form.Control type="text" placeholder="Título do projeto"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nome do estudante</Form.Label>
                    <Form.Control type="text" placeholder="Nome do estudante"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Matrícula do Estudante</Form.Label>
                    <Form.Control type="text" placeholder="Matrícula do Estudante"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nome do 2° Membro da Banca</Form.Label>
                    <Form.Control type="text" placeholder="Nome do 2° Membro da Banca"/>
                </Form.Group>   
                <Form.Group>
                    <Form.Label for="thirdM">Título do 2° Membro</Form.Label>
                    <Form.Control type="text" placeholder="Título do 2° Membro"/>
                </Form.Group>   
                <Form.Group>
                    <Form.Label>3° membro</Form.Label>
                    <Form.Switch id="thirdM"></Form.Switch>
                </Form.Group>
                    <Form.Label>Nome do 3° Membro da Banca</Form.Label>
                    <Form.Control type="text" placeholder="Nome do 3° Membro da Banca"/>
                <Form.Group>
                    <Form.Label>Título do 3° Membro</Form.Label>
                    <Form.Label type="text" placeholder="Título do 3° Membro"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Sala de apresentação</Form.Label>
                    <Form.Control type="text" placeholder="Sala de apresentação"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Data da defesa</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Hora da defesa</Form.Label>
                    <Form.Control type="text" placeholder="Hora da defesa"/>
                </Form.Group>
                <Button type="submmit">Criar</Button>
            </Form>

        </Container>
    );
}

export default TCCForm1;