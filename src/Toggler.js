import React from "react"
import useToggle from "./hooks/useToggle"
function Toggler() {
    const [isSoundOn, toggleIsSoundOn] = useToggle(true);
    return (
        <div>
            <h2>
                Custom hooks
        </h2>
            <p>Click icon to toggle</p>
            <span style={{fontSize:'2em'}} onClick={toggleIsSoundOn}>{isSoundOn ? "🔈" : "🔇"}</span>
        </div>
    )
}

export default Toggler