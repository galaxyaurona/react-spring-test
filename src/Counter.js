import React, {useState, useEffect} from 'react'

function Counter(props) {
    const [count, setCount] = useState(0)
    // be cause use effect to perform setup and cleanup only once
    // with ref to get latest count reference
    const countRef = React.useRef(count);
    // load count cache from local storage, run once
    useEffect(() => {
        const countCache = parseInt(localStorage.getItem("countCache"));
   
        countCache && !isNaN(countCache) && setCount(countCache)
        // saving to local storage (when unmount)
        // to get latest count
        return ()=>{      
            localStorage.setItem("countCache",countRef.current)
        }
    },[])
    // use effect to track reference
    useEffect(()=>{
        countRef.current = count
    },[count])

 
    useEffect(()=>{
        return () => {
     
        }
    },[count])
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