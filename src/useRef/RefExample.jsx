import React, { useRef } from 'react'

function RefExample() {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.value = "";
    }
    return (
        <div>
            <h1 style={{ textAlign: "left" }}>4. useRef</h1>
            <h2>Sushant</h2>
            <input type="text" placeholder='Ex...' ref={inputRef} />
            <button onClick={handleClick}>SUBMIT</button>
        </div>
    )
}

export default RefExample