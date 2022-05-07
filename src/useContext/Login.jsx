import React, { useContext } from 'react';
import { UserContext } from './ContextExample';

function Login() {

    const { setUsername } = useContext(UserContext);
    return (
        <div>
            <input
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />
        </div>
    )
}

export default Login