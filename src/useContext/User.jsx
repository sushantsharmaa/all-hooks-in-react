import React, { useContext } from 'react';
import { UserContext } from './ContextExample';

function User() {

    const { username } = useContext(UserContext);
    return (
        <div>
            <h1>USER: {username}</h1>
        </div>
    )
}

export default User