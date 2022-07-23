import React from "react";
import { Link } from "react-router-dom";

function HomePage() {

    return(
        <div>
            <h1>Início</h1>
            <Link to="/new/doc" >Criar novo documento</Link><br/>
            <Link to="/logout" >Sair</Link><br/>
        </div>
    );
}

export default HomePage;