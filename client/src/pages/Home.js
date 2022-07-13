import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return(
        <div>
            <h1>Início</h1>
            <Link to="/new/doc" >Criar novo documento</Link><br/>
            <Link to="/login" >Entrar</Link>
        </div>
    );
}

export default Home;