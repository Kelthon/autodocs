import  React, { useState, useRef, useEffect, createContext, useContext } from "react"
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const user = useRef(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const storageUser = localStorage.getItem("user");
        
        if(storageUser) {
            user.current = JSON.parse(storageUser)
        }

        setLoading(false);
    }, []);
    
    const login = (id, token) => {
        user.current = {id: id, token: token}
        localStorage.setItem("user", JSON.stringify(user));
        return navigate(-2);
    }
    
    const logout = () => {
        user.current = null;
        localStorage.removeItem("user")
        return navigate("/", { replace: true });
    }

    return(
        <AuthContext.Provider
            value={{ authenticated: !!user.current, user, loading, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    
    if(context === undefined) throw new Error("useAuth must be used within a AuthProvider");
    
    return context;
}