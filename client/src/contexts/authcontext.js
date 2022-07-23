import React, { useState, createContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
    authenticated: false, user: null, loading: true, login: (id, token) => {}, logout: () => {}
});

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const storageUser = localStorage.getItem("user");
        
        if(storageUser) {
            setUser(JSON.parse(storageUser));
        }

        setLoading(false);
    }, []);
    
    const login = (id, token) => {
        setUser({id: id, token: token});
        localStorage.setItem("user", JSON.stringify(user));
        return navigate(-1);
    }
    
    const logout = () => {
        setUser(null);
        return navigate("/");
    }

    return(
        <AuthContext.Provider
            value={{ authenticated: !!user, user, loading, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    )
};