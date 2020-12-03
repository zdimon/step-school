import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState<number>(() => {
    return 0
  })
  const [counterN, setCounterN] = useState<number>(() => {
    return 0
  })
  return (
    <div className="App">
      <button 
        onClick = { () => setCounter((prevState: number): number =>{
          
          return prevState + 1
        } )}>
        ♥ {counter}
      </button>

      <button 
        onClick = { () => setCounterN((prevStateN: number): number =>{
          
          return prevStateN - 1
        } )}>
        👎 {counterN}
      </button>

    </div>
  );

}

export default App;
