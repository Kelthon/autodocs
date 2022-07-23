import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/authcontext";

function LogoutPage() {

    const {authenticated, logout} = useContext(AuthContext);

    if(authenticated) logout();
    else return <Navigate to="/"/>;
}

export default LogoutPage;