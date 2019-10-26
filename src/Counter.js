import React, {useState, useProps} from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Build in hooks</h1>
            <h2>Set state</h2>
            <h3>Current count: {count}</h3>
            <button onClick={()=> setCount(count+1)}>Increase</button>
            <button onClick={()=> setCount(count-1)}>Decrease</button>
        </div>
    )
}
export default Counter;