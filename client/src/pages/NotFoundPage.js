import React from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function NotfoundPage() {
    const location = useLocation();
    return (
        <Container>
            <div className="text-center p-5">
                <h1 className="mt-5">404<br/>Not Found</h1>
                <p className="mt-5">The page <span className="text-warning">'{location.pathname + location.search}'</span> isn't found or isn't avaliable</p>
                <p className="mb-5">If is a Error try to contact us</p>
                <Link to="/" className="my-5">click here to back to Home</Link>
            </div>
        </Container>
    )
}

export default NotfoundPage;