import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminPage from "./pages/AdminPage";
import RequestPage from "./pages/RequestPage";

import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import TcciFormPage from "./pages/tccFormPage";
import TcciEditPage from "./pages/tcciEditPage";
import TccRequestiEditPage from "./pages/TccRequestiEditPage";

import PrivateRoute from "./utils/privateRoute";
import AdminRoute from "./utils/adminRoute";
import UserFormPage from "./pages/UserFormPage";

function RouterList() {
    
    return (
        <Routes>
            <Route path="/" element={ <HomePage/> }/>
            <Route path="login" element={ <LoginPage/> }/>
            <Route path="admin">
                <Route path="panel" element={<AdminRoute><AdminPage/></AdminRoute>}/>
                <Route path="request" element={<AdminRoute><RequestPage/></AdminRoute>}/>
                <Route path="edit/tcci/:id" element={<AdminRoute>{<TccRequestiEditPage/>}</AdminRoute>}/>
            </Route>
            <Route path="edit">
                <Route path="doc" element={<PrivateRoute>{<TcciEditPage/>}</PrivateRoute>}/>
            </Route>
            <Route path="new">
                <Route path="doc" element={<PrivateRoute><TcciFormPage/></PrivateRoute>}/>
                <Route path="user" element={<PrivateRoute><UserFormPage/></PrivateRoute>}/>
            </Route>
        </Routes>
    )
}

export default RouterList;