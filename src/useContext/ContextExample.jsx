import React, { createContext, useState } from 'react'
import Login from './Login';
import User from './User';

export const UserContext = createContext(null);

function ContextExample() {
    const [username, setUsername] = useState("");

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            <h1 style={{ textAlign: "left" }}>7. useContext</h1>
            <Login />
            <User />
        </UserContext.Provider>
    )
}

export default ContextExample