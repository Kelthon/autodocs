import React, { useState } from "react"
import { Col } from "react-bootstrap";
import api from "../services/api";

function ColumnName({ id }) {

    const [name, setName] = useState();

    api.get("/api/user/" + id).then(res => {
        setName(res.data);
    });

    return (
        <Col>{name}</Col>
    );
}

export default ColumnName;