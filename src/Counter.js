import React, {useState, useEffect} from 'react'
import {useSpring, animated} from 'react-spring'
import usePrevious from './hooks/usePrevious';
function roundTo(num,decimalPoint){
    return Math.round(num*10**decimalPoint)/10**decimalPoint
}
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
    const previousCount = usePrevious(count);
    console.log(previousCount)
    const animatedCount = useSpring({ config: {precision: 0.01}, value: roundTo(count,2) || 0, from: { value: roundTo(previousCount,2) || 0 } })
 
    return (
        <div>
            <h1>Build in hooks</h1>
            <h2>Set state</h2>
        
            <h3>Current count:  <animated.span>{animatedCount.value}</animated.span></h3>
            <button onClick={()=> setCount(count+1)}>Increase</button>
            <button onClick={()=> setCount(count-1)}>Decrease</button>
        </div>
    )
}
export default Counter;