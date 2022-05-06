import axios from 'axios'
import React, { useEffect, useState } from 'react'

function EffectExample() {
    const [data, setData] = useState("");
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data[0].email);
            })
    }, [])
    return (
        <div>
            <h1 style={{ textAlign: "left" }}>3. useEffect</h1>
            <p>{data}</p>
        </div>
    )
}

export default EffectExample