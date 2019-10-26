import React from "react"
import useToggle from "./hooks/useToggle"
function Toggler(){
    const [isSoundOn, toggleIsSoundOn] = useToggle(true);
    return (
        <div onClick={toggleIsSoundOn}>{ isSoundOn ? "🔈" : "🔇"}</div>
    )
}
 
export default Toggler