import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/authcontext";

const PrivateRoute = ({children}) => {
    const { authenticated, loading } = useContext(AuthContext);
    
    if(loading) {
        return <div className="loading">loading...</div>
    }

    return authenticated ? children : <Navigate to="/login"/>
}

export default PrivateRoute;