import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import TcciFormPage from "./pages/tccFormPage";
import { AuthProvider } from "./contexts/authcontext";
import PrivateRoute from "./utils/privateRoute";
import LogoutPage from "./pages/logoutPage";

function RouterList() {
    
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={ <HomePage/>}/>
                <Route path="login" element={ <LoginPage/> }/>
                <Route path="logout" element={ <LogoutPage/> }/>
                <Route path="new">
                    <Route path="doc" element={<PrivateRoute><TcciFormPage/></PrivateRoute>}/>
                </Route>
            </Routes>
        </AuthProvider>
    )
}

export default RouterList;