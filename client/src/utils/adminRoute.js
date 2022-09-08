import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/authcontext";
import api from "../services/api";

const AdminRoute = ({children}) => {
    const { authenticated, loading, user } = useContext(AuthContext);
    const [adm, setAdm] = useState(false);

    if(loading) {
        return <div className="loading">loading...</div>
    }

    if(authenticated) {
    api.get(`/api/typeuser/${user.current.id}`).then(res => {
        setAdm(res.data === true?true:false);
    });}

    return adm ? children : <Navigate to="/login"/>
}

export default AdminRoute;