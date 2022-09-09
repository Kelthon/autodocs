import React, { useState } from "react"
import { Row, Col } from "react-bootstrap";
import api from "../services/api";
import ColumnName from "./ColName";
import { datef } from "../utils/datef";
import { Link } from "react-router-dom";

function RowRequest({ id }) {
    const [rows, setRows] = useState();
    const [lines, setLines] = useState();
    
    api.get("/api/view/requests/").then(res => {
        setRows(res.data);
        if(rows !== undefined) setLines(rows.map(i =>
            <Row key={i.id}>
                <Col>#{i.id}</Col>
                <Col>{datef(i.updatedAt)}</Col>
                <Col>{i.type}</Col>
                <Link to={`/admin/edit/tcci/${i.id}`}>
                    <ColumnName id={i.id}/>
                </Link>
                <Col>{i.description}</Col>
            </Row>
        ));
    });

    return lines;
}

export default RowRequest;