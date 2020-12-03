import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter1, setCounter1] = useState<number>(0)
  const [counter2, setCounter2] = useState<number>(0)
  const [counter3, setCounter3] = useState<number>(0)
  const [color1, setColor1] = useState<string>("green")
  const [color2, setColor2] = useState<string>("green")
  const [color3, setColor3] = useState<string>("green")

  

  return (
    <div className="App">
     
      <br></br>
      <button
      style = {{ backgroundColor: color1, width: '100px' , height: '30px'  }}
      onClick={() => setCounter1(( prevState: number): number => {
        setColor1('yellow')
        return prevState + 10
       })}>
        {counter1}
      </button>
      
 
      <button
      style = {{ backgroundColor: color2, width: '100px' , height: '30px'  }}
      onClick={() => setCounter2(( prevState: number): number => {
        setColor2('red')
        return prevState - 100
       })}>
        {counter2}
      </button> 

      <button
      style = {{ backgroundColor: color3, width: '100px' , height: '30px'  }}
      onClick={() => setCounter3(( prevState: number): number => {
        setColor3('blue')
        return prevState + 25
       })}>
        {counter3}
      </button>
      
    </div>
  );
}

export default App;
