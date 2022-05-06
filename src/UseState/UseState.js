import React, { useState } from 'react'

function UseState() {
    const [inputValue, setInputValue] = useState("Change me...");

    const handleChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    }

    return (
        <div>
            <input placeholder='Write Something...' onChange={handleChange} />
            <h1>{inputValue}</h1>
        </div>
    )
}

export default UseState