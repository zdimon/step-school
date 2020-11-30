import React, { useState, useEffect } from 'react';
import {Article} from './components/Article/Article'

import './App.css';

function App() {
 const [visible, setVisible] = useState<boolean>(false)
  useEffect(() => {
    console.log('render')
    return
  }, [])

  return (
    <div className="App">
      <button onClick={()=>setVisible(prevState => !prevState)}>Trigger</button>
      {visible && <Article
      title = {'Post 1'}
      date={new Date().toString()}
      />}
    </div>
  );
}

export default App;
