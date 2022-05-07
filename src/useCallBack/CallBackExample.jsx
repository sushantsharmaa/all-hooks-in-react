import React, { useCallback, useState } from 'react'
import Child from './Child';

function CallBackExample() {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Hi, I am Sushant a web-dev.");

    const returnComment = useCallback((name) => {
        return data + name;
    }, [data])

    return (
        <div>
            <h1 style={{ textAlign: "left" }}>9. useCallBack</h1>
            <Child returnComment={returnComment} />
            <button
                onClick={() => {
                    setToggle(!toggle);
                }}
            >Toggle</button>
            {toggle && <h1>Toggle Toggle</h1>}
        </div>
    )
}

export default CallBackExample