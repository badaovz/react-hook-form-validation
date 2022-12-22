import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [users, setUsers] = useState([
        {
            username: 'badaovailoz',
            password: '111111'
        },
])
    const [auth, setAuth] = useState(false);
    const getAuth = () => {
        setAuth(true)
    }

    const logout = () => {
        setAuth(false)
    }

    const addUser = (data) => {
        const newUsers = [...users, data];
        setUsers(newUsers);
    }

    return(
        <AuthContext.Provider value={{auth, users, getAuth, logout, addUser}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuthContext = () => {
    return useContext(AuthContext);
}