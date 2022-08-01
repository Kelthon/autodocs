import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/authcontext";

function LogoutPage() {

    const {authenticated, logout} = useContext(AuthContext);

    useEffect(()=> {
        if(authenticated) logout();
    }, [])
}

export default LogoutPage;