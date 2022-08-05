import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import TcciFormPage from "./pages/tccFormPage";

import PrivateRoute from "./utils/privateRoute";

function RouterList() {
    
    return (
        <Routes>
            <Route path="/" element={ <HomePage/>}/>
            <Route path="login" element={ <LoginPage/> }/>
            <Route path="new">
                <Route path="doc" element={<PrivateRoute><TcciFormPage/></PrivateRoute>}/>
            </Route>
        </Routes>
    )
}

export default RouterList;