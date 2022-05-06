import React, { useState } from 'react'

function StateExample() {
    const [inputValue, setInputValue] = useState("Change me...");

    const handleChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    }

    return (
        <div>
            <h1 style={{ textAlign: "left" }}>1. useState</h1>
            <input placeholder='Write Something...' onChange={handleChange} />
            <h2>{inputValue}</h2>
        </div>
    )
}

export default StateExample