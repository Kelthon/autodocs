import React from "react";
import { Link } from "react-router-dom"

function Navbar ({ children }) {
    return (
        <>
            <nav className="App-header">
                <ul className="App-header-navbar">
                    <div className="App-header-logo">
                        <Link to="/login/">Início</Link>
                    </div>
                    <li className="App-header-navbar-item">
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/new/doc">Novo documento</Link>
                    </li>
                    <li>
                        <Link to="/new/doc">login/sair</Link>
                    </li>
                    {children}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;