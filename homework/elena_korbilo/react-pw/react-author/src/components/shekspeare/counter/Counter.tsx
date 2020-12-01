import React, {useState} from 'react'

function Counter() {
    const [counter, setCount] = useState<number>(0);
    return (
        <div>
           <button onClick={() => setCount(item => item + 1)}>{counter}</button>
        </div>
    )
}

export default Counter