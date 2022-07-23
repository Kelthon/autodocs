import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
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
            console.log("Error: " + err.message);
            return navigate("/new/doc", { replace: true });
        })  
    };

    return(
        <Container>
            {children}
            <h1>Novo documento TCC 1</h1>
            <Form onSubmit={handleForm}>
                <Form.Group onChange={event => { setTitle(event.target.value) }}>
                    <Form.Label>Título do projeto</Form.Label>
                    <Form.Control defaultValue={title} type="text" placeholder="Título do projeto"/>
                </Form.Group>

                <Form.Group onChange={event => { setStudentName(event.target.value) }}>
                    <Form.Label>Nome do estudante</Form.Label>
                    <Form.Control defaultValue={studentName} type="text" placeholder="Nome do estudante"/>
                </Form.Group>

                <Form.Group onChange={event => { setStudentRegistration(event.target.value) }}>
                    <Form.Label>Matrícula do Estudante</Form.Label>
                    <Form.Control defaultValue={studentRegistration} type="text" placeholder="Matrícula do Estudante"/>
                </Form.Group>

                <Form.Group onChange={event => { setSecondMemberName(event.target.value) }}>
                    <Form.Label>Nome do 2° Membro da Banca</Form.Label>
                    <Form.Control defaultValue={secondMemberName} type="text" placeholder="Nome do 2° Membro da Banca"/>
                </Form.Group> 

                <Form.Group onChange={event => { setSecondMemberTitle(event.target.value) }}>
                    <Form.Label>Título do 2° Membro</Form.Label>
                    <Form.Control defaultValue={secondMemberTitle} type="text" placeholder="Título do 2° Membro"/>
                </Form.Group>  

                <Form.Group onChange={event => { event.target.value == "on" ? setThirdMember(true) : setThirdMember(false) }}>
                    <Form.Label htmlFor="thirdM">3° membro</Form.Label>
                    <Form.Switch id="thirdM"></Form.Switch>
                </Form.Group>

                <Form.Group  onChange={event => { setThirdMemberName(event.target.value) }}>
                    <Form.Label>Nome do 3° Membro da Banca</Form.Label>
                    <Form.Control defaultValue={thirdMemberName} type="text" placeholder="Nome do 3° Membro da Banca"/>
                </Form.Group>

                <Form.Group onChange={event => { setThirdMemberTitle(event.target.value) }}>
                    <Form.Label>Título do 3° Membro</Form.Label>
                    <Form.Label defaultValue={thirdMemberTitle} type="text" placeholder="Título do 3° Membro"/>
                </Form.Group>

                <Form.Group onChange={event => { setPresentationRoom(event.target.value) }}>
                    <Form.Label>Sala de apresentação</Form.Label>
                    <Form.Control defaultValue={presentationRoom} type="text" placeholder="Sala de apresentação"/>
                </Form.Group>

                <Form.Group onChange={event => { setPresentationDate(event.target.value) }}>
                    <Form.Label>Data da defesa</Form.Label>
                    <Form.Control defaultValue={presentationDate} type="date"/>
                </Form.Group>

                <Form.Group onChange={event => { setPresentationHour(event.target.value) }}>
                    <Form.Label>Hora da defesa</Form.Label>
                    <Form.Control defaultValue={presentationHour} type="text" placeholder="Hora da defesa"/>
                </Form.Group>

                <Button type="submit">Criar</Button>
            </Form>
        </Container>
    );
}

export default TcciFormPage;