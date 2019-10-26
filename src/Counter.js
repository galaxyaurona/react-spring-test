import React, {useState, useProps} from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Current count: {count}</h1>
            <button onClick={()=> setCount(count+1)}>Increase</button>
            <button onClick={()=> setCount(count-1)}>Decrease</button>
        </div>
    )
}
export default Counter;