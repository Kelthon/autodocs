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
            <Link className="text-decoration-none" to={`/admin/edit/tcci/${i.id}`}>
                <Row key={i.id}>
                    <Col>#{i.id}</Col>
                    <Col>{datef(i.updatedAt)}</Col>
                    <Col>{i.type}</Col>
                        <ColumnName id={i.id}/>
                    <Col>{i.description}</Col>
                </Row>
            </Link>
        ));
    });

    return lines;
}

export default RowRequest;