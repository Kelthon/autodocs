import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authcontext";
import NotfoundPage from "../pages/NotFoundPage";
import api from "../services/api";

const AdminRoute = ({children}) => {
    const { authenticated, loading, user } = useContext(AuthContext);
    const [adm, setAdm] = useState(false);

    useEffect(() => {
        const verify = async () => {
            if(authenticated) {
                await api.get(`/api/typeuser/${user.current.id}`).then(res => {
                    setAdm(res.data === true?true:false);
                });
            }
        }
        verify();
    }, [authenticated]);


    if(loading) {
        return <div className="loading">loading...</div>
    }

    
    return adm? children : <NotfoundPage/>
}

export default AdminRoute;