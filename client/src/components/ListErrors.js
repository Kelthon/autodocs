import React, { useState } from "react"
import { Alert } from "react-bootstrap";

function ListErrors(err) {
    const [errors, setErrors] = useState();
    setErrors(err.map(i => {
        <Alert variant="danger"></Alert>
    }));
    
    return errors
}

export default ListErrors;