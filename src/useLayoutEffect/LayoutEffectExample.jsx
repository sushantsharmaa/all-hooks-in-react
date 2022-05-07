import React, { useEffect, useLayoutEffect, useRef } from 'react'

function LayoutEffectExample() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.value = "Sushant";
    }, []);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: "left" }}>5. useLayoutEffect</h1>
            <input ref={inputRef} type="text" value="Sharma" />
        </div>
    )
}

export default LayoutEffectExample