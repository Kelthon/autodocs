import React from "react";
import { Container, Badge, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminPage() {
    return (

        <Container>
            <ListGroup as="ol">
                <h1>Painel de Controle</h1>
                <Link to="../request" className="text-decoration-none">
                    <ListGroup.Item action
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Solicitações</div>
                        Gerenciar solicitações de documentos
                        </div>
                        <Badge bg="primary" pill>
                        
                        </Badge>
                    </ListGroup.Item>
                </Link>
                <Link to="../edit/coordinator" className="text-decoration-none">
                    <ListGroup.Item action
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Coordenador</div>
                        Opcões do cooordenador 
                        </div>
                        <Badge bg="primary" pill>
                        
                        </Badge>
                    </ListGroup.Item>
                </Link>
                <Link to="/new/user" className="text-decoration-none">
                    <ListGroup.Item action
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Cadastrar</div>
                        Cadastar novo usuario
                        </div>
                        <Badge bg="primary" pill>
                        
                        </Badge>
                    </ListGroup.Item>
                </Link>
                <Link to="../edit/user/" className="text-decoration-none">
                    <ListGroup.Item action
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                        >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Editar</div>
                        Editar usuarios
                        </div>
                        <Badge bg="primary" pill>
                        
                        </Badge>
                    </ListGroup.Item>
                </Link>
                <Link to="../delete/user/" className="text-decoration-none">
                    <ListGroup.Item action
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Excluir</div>
                        Excluir usuarios
                        </div>
                        <Badge bg="primary" pill>
                        
                        </Badge>
                    </ListGroup.Item>
                </Link>
                </ListGroup>
        </Container>
    );
}

export default AdminPage;