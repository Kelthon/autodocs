import React, { useState } from "react"
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import api from "../services/api";

function TcciReqEditPage() {
    
    const { id } = useParams();
    const [ requestId, setRequestId ] = useState();
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

    api.get(`/api/view/request/${id}`).then(res => {
        const request = res.data;
        setRequestId(request.id);
        setTitle(request.projectTitle);
        setStudentName(request.studentName);
        setStudentRegistration(request.studentRegistration);
        setStudentPeriod(request.studentPeriod);
        setSecondMemberName(request.secondMemberName);
        setSecondMemberTitle(request.secondMemberTitle);
        setThirdMember(request.thirdMember);
        setThirdMemberName(request.thirdMemberName);
        setThirdMemberTitle(request.thirdMemberTitle);
        setPresentationRoom(request.presentationRoom);
        setPresentationDate(request.presentationDate);
        setPresentationHour(request.presentationHour);
    });
    
    const handleForm = event => {
        event.preventDeafult();
    }

    return (
        <Container fluid="grid">
            <section>
            <Form onSubmit={handleForm}>

                <h1 className="mt-4">Edição #{requestId}</h1>
                <h4 className="mt-4">Tipo formulário para trabalho de conclusão de curso I</h4>
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
                        <Button variant="success" className="mt-5" type="submit">Aceitar</Button>  
                </div>
            </Form>
            </section>
        </Container>
    );
}

export default TcciReqEditPage;