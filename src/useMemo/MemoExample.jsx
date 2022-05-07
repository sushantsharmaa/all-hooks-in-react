import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'

function MemoExample() {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setData(response.data);
            });
    }, []);

    const findLongestName = (comments) => {
        if (!comments) return null;

        let longestName = "";

        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }
        console.log("THIS WAS COMPUTED");
        return "Longest Comment: " + longestName;
    }

    const getLongestName = useMemo(() => findLongestName(data), [data]);

    return (
        <div>
            <h1 style={{ textAlign: "left" }}>8. useMemo</h1>
            <h2>{getLongestName}</h2>
            <button
                onClick={() => {
                    setToggle(!toggle);
                }}
            >Toggle</button>
            {toggle && <h2>Toggle Toggle</h2>}
        </div>
    )
}

export default MemoExample