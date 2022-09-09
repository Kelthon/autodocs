import React from "react"
import { Button, Container } from "react-bootstrap";
import api from "../services/api";

function TcciEditPage({children}) {
    // api.get(`api/view/request/`)
    return (
        <Container display="fluid">
            <div contentEditable>
            <div className="a4">
                <div className="content">
                    <div className="text-center underline">
                        <span><strong>FORMULÁRIO DE AVALIAÇÃO</strong></span><br/>
                        <span><strong>PROJETO DE GRADUAÇÃO I</strong></span><br/><br/>
                    </div>
                    
                    <span><strong>Título:</strong></span><br/><br/>
                    
                    <span><strong>Orientando (a): </strong></span><br/>
                    <span><strong>Orientador (a): </strong></span><br/>
                    <span><strong>Atividade:</strong> Projeto de Graduação</span><br/>
                    <span><strong>Local:</strong> Juazeiro do Norte</span><br/>
                    <span><strong>Data da defesa: </strong></span><span><strong>Hora: </strong></span><br/><br/>
                    
                    <span><strong>Tabela de avaliação (0 a 1 ponto para cada item, com apenas um algarismo significativo)</strong></span>
                    <table >
                        <thead >
                            <tr>
                                <td rowSpan="2"><div className="text-center"><strong>Item de avaliação</strong></div></td>
                                <td colSpan="3"><div className="text-center"><strong>Examinadores</strong></div></td>
                                <td rowSpan="2"><div className="text-center"><strong>Média</strong></div></td>
                            </tr>
                            <tr>
                                <td><div className="text-center"><strong>Pres.</strong></div></td>
                                <td><div className="text-center"><strong>Ex.1</strong></div></td>
                                <td><div className="text-center"><strong>Ex.2</strong></div></td>
                            </tr>
                            <tr>
                                <td><div className="text-center"><strong>Texto (parte escrita)</strong></div></td>
                                <td colSpan="4"><div className="text-center"><strong> - </strong></div></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td><span>Delimitação do tema e identificação do problema</span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                            </tr>
                            <tr>
                                <td><span>Descrição do objeto da pesquisa e elaboração da justificativa</span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                            </tr>
                            <tr>
                                <td><span>Objetividade, precisão e coerência no desenvolvimento do tema</span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                            </tr>
                            <tr>
                                <td><span>Fundamentação teórica adequada</span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                            </tr>
                            <tr>
                                <td><span>Redação clara, concisa e objetiva</span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                            </tr>
                            <tr>
                                <td><span>Seleção bibliográfica relevante e cumprimento das normas de redação científica</span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                            </tr>
                            <tr>
                                <td><div className="text-center"><strong>Apresentação (defesa oral)</strong></div></td>
                                <td colSpan="4"><div className="text-center"><strong> - </strong></div></td>
                            </tr>
                            <tr>
                                <td><span>Administração adequada do tempo de apresentação</span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                            </tr>
                            <tr>
                                <td><span>Qualidade do material didático</span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                            </tr>
                            <tr>
                                <td><span>Clareza e objetividade na resposta aos questionamentos</span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                            </tr>
                            <tr>
                                <td><span>Vocabulário e clareza de raciocínio</span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                            </tr>
                            <tr>
                                <td><strong>Soma e nota final</strong></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                                <td><span></span></td>
                            </tr>
                        </tbody>
                    </table>
                    <span><strong>Observações:_____________________________________________________________________</strong></span><br/>
                    <span><strong>Resultado final (nota):_____________________________________________________________</strong></span><br/><br/>
                    <span><strong>Assinaturas:</strong></span><br/><br/>
                    <div className="text-center">
                        <span><strong>_______________________________________________________</strong></span>
                        <span><strong></strong></span><br/>
                        <span><strong>_______________________________________________________</strong></span>
                        <span><strong></strong></span><br/>
                    </div>
                </div>
            {children}
            </div>
            </div>
        </Container>
    );
}

export default TcciEditPage;