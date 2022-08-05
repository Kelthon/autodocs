import React from "react";
import { Link } from "react-router-dom"
import { Container, Navbar, Button } from "react-bootstrap"
import { LoginOption, LogoutOption } from "./UserOptions";
import { useAuth } from "../contexts/authcontext";

function Menu() {

    const { authenticated } = useAuth()
    
    return (
        <>
            <Navbar className="navbar navbar-expand-lg">
                <Container display="fuild">
                    {/* <Link className="navbar-brand" to="/">
                        <img src={logo} className="navbar-brand img-thumbnail bg-transparent w-25 border-0 mx-0"/>Autodocs
                    </Link> */}
                    <Button
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-controls="navbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav text-light hstack me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link link-light" aria-current="page" to="/">Início</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link-light" to="/new/doc">Novo documento</Link>
                            </li>
                            <li className="nav-item">
                                { authenticated ? <LogoutOption/> : <LoginOption/> }
                            </li>
                        </ul>
                    </div>
                </Container>
            </Navbar> 
        </>
    );
}

export default Menu;