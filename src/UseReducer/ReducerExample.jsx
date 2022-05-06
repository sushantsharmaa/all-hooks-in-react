import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText }
        case "toggleShowText":
            return { count: state.count, showText: !state.showText }
        default:
            return state
    }
}

function ReducerExample() {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: false });

    return (
        <div>
            <h1 style={{ textAlign: "left" }}>2. useReducer</h1>
            <h2>{state.count}</h2>
            <button
                onClick={() => {
                    dispatch({ type: "INCREMENT" });
                    dispatch({ type: "toggleShowText" });
                }}
            >CLICK ME</button>
            {state.showText && <p>I can disappear.</p>}
        </div>
    )
}

export default ReducerExample