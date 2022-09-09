import React from "react"
import { Button, Form } from "react-bootstrap";
import api from "../services/api";

function CordinatorPage() {
    const formSubmit = async event => {
        event.prenventDeafult();
        // await api.get()
    }

    return (
        <section>
            <Form className="my-5" onSubmit={formSubmit}>
                <h1>Editar Membros da Coordenação</h1>
                <Form.Group>
                    <Form.Label>Siape do Novo Coordenador</Form.Label>
                    <Form.Control/>
                </Form.Group>
                <Form.Group className="mt-4">
                    <Form.Label>Siape do Novo ViceCoordenador</Form.Label>
                    <Form.Control/>
                </Form.Group>
                <Form.Group className="row mt-4">
                    <Form.Check className="col-auto" id="active" checked/>
                    <Form.Label className="col-auto" for="active">Coordenador em Atividade</Form.Label>
                </Form.Group>
                <Form.Group>
                    <Button className="mt-2" type="submit">Salvar</Button>
                </Form.Group>
            </Form>
        </section>
    );
}

export default CordinatorPage;