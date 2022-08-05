import React from 'react'
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/authcontext";

export const LogoutOption = () => {
    const { logout } = useAuth();
    
    const onLogout = event => {
        event.preventDefault()
        logout()
    }

    return  <Link onClick={onLogout} className="nav-link link-light" to="/"><span>Sair</span></Link>
}

export const LoginOption = () => {
    return <Link className="nav-link link-light" to="/login">Entrar</Link>
}