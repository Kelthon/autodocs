import React from "react";
import { Link } from "react-router-dom"
import { Navbar } from "react-bootstrap"

function Menu({children}) {
    
    return (
        <>
            <Navbar className="App-header">
                <ul className="App-header-navbar">
                    <div className="App-header-logo">
                        <Link to="/">Início</Link>
                    </div>
                    <li className="App-header-navbar-item">
                        <Link to="/">Início</Link>
                    </li>
                    <li className="App-header-navbar-item">
                        <Link to="/new/doc">Novo documento</Link>
                    </li>
                    <li className="App-header-navbar-item">
                        <Link to="/login">Entrar</Link>
                    </li>
                    {children}
                </ul>
            </Navbar> 
        </>
    );
}

export default Menu;