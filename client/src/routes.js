import React from "react";
import { 
    Routes,
    Route,
} from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import TCCForm1 from "./pages/TCCForm1"

function RouterList() {
    return (
        <Routes>
            <Route path="/" element={ <Home/>}/>
            <Route path="login" element={ <Login/> }/>
            <Route path="new">
                <Route path="doc" element={ <TCCForm1/> }/>
            </Route>
        </Routes>
    )
}

export default RouterList