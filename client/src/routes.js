import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminPage from "./pages/AdminPage";
import RequestPage from "./pages/RequestPage";

import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import TcciFormPage from "./pages/tccFormPage";
import TcciEditPage from "./pages/tcciEditPage";

import PrivateRoute from "./utils/privateRoute";

function RouterList() {
    
    return (
        <Routes>
            <Route path="/" element={ <HomePage/> }/>
            <Route path="login" element={ <LoginPage/> }/>
            <Route path="admin">
                <Route path="panel" element={<PrivateRoute><AdminPage/></PrivateRoute>}/>
                <Route path="request" element={<PrivateRoute><RequestPage/></PrivateRoute>}/>
            </Route>
            <Route path="edit">
                <Route path="tcci/:id" element={<PrivateRoute>{<TcciEditPage/>}</PrivateRoute>}/>
                <Route path="doc" element={<PrivateRoute>{<TcciEditPage/>}</PrivateRoute>}/>
            </Route>
            <Route path="new">
                <Route path="doc" element={<PrivateRoute><TcciFormPage/></PrivateRoute>}/>
            </Route>
        </Routes>
    )
}

export default RouterList;