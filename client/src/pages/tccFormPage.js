import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function TcciFormPage({children}) {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [studentName, setStudentName] = useState("");
    const [studentRegistration, setStudentRegistration] = useState("");
    const [studentPeriod, setStudentPeriod] = useState("");
    const [secondMemberName, setSecondMemberName] = useState("");
    const [secondMemberTitle, setSecondMemberTitle] = useState("");
    const [thirdMember, setThirdMember] = useState(false);
    const [thirdMemberName, setThirdMemberName] = useState("");
    const [thirdMemberTitle, setThirdMemberTitle] = useState("");
    const [presentationRoom, setPresentationRoom] = useState("");
    const [presentationDate, setPresentationDate] = useState("");
    const [presentationHour, setPresentationHour] = useState("");

    const handleForm = async event => {
        event.preventDefault();

        await api.post("/api/new/doc", {
            title: title,
            studentName: studentName,
            studentRegistration: studentRegistration,
            studentPeriod: studentPeriod, 
            secondMemberName: secondMemberName,
            secondMemberTitle: secondMemberTitle,
            thirdMember: true,
            thirdMemberName: thirdMemberName,
            thirdMemberTitle: thirdMemberTitle,
            presentationRoom: presentationRoom, 
            presentationDate: presentationDate, 
            presentationHour: presentationHour,
        }).then(res => {
            return navigate("/", { replace: true });
        }).catch(err => {
            return navigate("/new/doc", { replace: true });
        })  
    };

    return(

        <Container fluid="grid">
            {children}
            <section>
            <Form onSubmit={handleForm}>
                <h1 className="mt-4">Formulário para trabalho de conclusão de curso I</h1>
                <Row>
                    <Col className="mt-2">
                        <Form.Group onChange={event => { setTitle(event.target.value) }}>
                            <Form.Label className="text-nowrap text-truncate">Título do projeto<span className="text-danger">*</span></Form.Label>
                            <Form.Control defaultValue={title} type="text" placeholder="Título do projeto"/>
                        </Form.Group>
                    </Col>

                </Row>
                <Row>
                    <Col className="mt-2">
                        <Form.Group onChange={event => { setStudentName(event.target.value) }}>
                            <Form.Label className="text-nowrap text-truncate">Nome completo do estudante<span className="text-danger">*</span></Form.Label>
                            <Form.Control defaultValue={studentName} type="text" placeholder="Nome do estudante"/>
                        </Form.Group>
                    </Col>
                    
                    <Col className="mt-2">
                        <Form.Group onChange={event => { setStudentRegistration(event.target.value) }}>
                            <Form.Label className="text-nowrap text-truncate">Número de matrícula do Estudante<span className="text-danger">*</span></Form.Label>
                            <Form.Control defaultValue={studentRegistration} type="text" placeholder="Matrícula do Estudante"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-2">
                        <Form.Group onChange={event => { setSecondMemberName(event.target.value) }}>
                            <Form.Label className="text-nowrap text-truncate">Nome do 2° Membro da Banca<span className="text-danger">*</span></Form.Label>
                            <Form.Control defaultValue={secondMemberName} type="text" placeholder="Nome do 2° Membro da Banca"/>
                        </Form.Group> 
                    </Col>
                    <Col className="mt-2">
                        <Form.Group onChange={event => { setSecondMemberTitle(event.target.value) }}>
                            <Form.Label className="text-nowrap text-truncate">Título do 2° Membro da Banca<span className="text-danger">*</span></Form.Label>
                            <Form.Control defaultValue={secondMemberTitle} type="text" placeholder="Título do 2° Membro"/>
                        </Form.Group>  
                    </Col>

                </Row>
                <Row className="mt-3 mb-0">
                    <Form.Group className=" d-flex justify-content-start">
                        <Form.Switch className="mt-3" onChange={event => {setThirdMember(!thirdMember ? true : false)}} id="thirdM"></Form.Switch>
                        <Form.Label className="text-nowrap mt-3" htmlFor="thirdM">Adcionar um 3° Membro da Banca</Form.Label>
                    </Form.Group>
                </Row>
                
                {
                    thirdMember && 
                    <Row>
                        <Col className="mt-2">
                            <Form.Group  onChange={event => { setThirdMemberName(event.target.value) }}>
                                <Form.Label className="text-nowrap text-truncate">Nome do terceiro Membro da Banca</Form.Label>
                                <Form.Control defaultValue={thirdMemberName} type="text" placeholder="Nome do 3° Membro da Banca"/>
                            </Form.Group>
                        </Col>

                        <Col className="mt-2">
                            <Form.Group onChange={event => { setThirdMemberTitle(event.target.value) }}>
                                <Form.Label className="text-nowrap text-truncate">Título do terceiro Membro da Banca</Form.Label>
                                <Form.Control defaultValue={thirdMemberTitle} type="text" placeholder="Título do 3° Membro"/>
                            </Form.Group>
                        </Col>
                    </Row>
                }

                <Row>
                    <Col className="mt-2">
                        <Form.Group onChange={event => { setPresentationDate(event.target.value) }}>
                            <Form.Label className="text-nowrap text-truncate">Data da defesa<span className="text-danger">*</span></Form.Label>
                            <Form.Control defaultValue={presentationDate} type="date"/>
                        </Form.Group>
                    </Col>

                    <Col className="mt-2">
                        <Form.Group onChange={event => { setPresentationHour(event.target.value) }}>
                            <Form.Label className="text-nowrap text-truncate">Hora da defesa<span className="text-danger">*</span></Form.Label>
                            <Form.Control defaultValue={presentationHour} type="time" placeholder="Hora da defesa"/>
                        </Form.Group>
                    </Col>

                    <Col className="mt-2">
                        <Form.Group onChange={event => { setPresentationRoom(event.target.value) }}>
                            <Form.Label className="text-nowrap text-truncate">Sala de apresentação<span className="text-danger">*</span></Form.Label>
                            <Form.Control defaultValue={presentationRoom} type="text" placeholder="Sala de apresentação"/>
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

export default TcciFormPage;