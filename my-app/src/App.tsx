import React from 'react';
<<<<<<< HEAD
import './App.css';
import { Post } from './Post';
import { Comment } from './Comment';

function App(props: any) {
    const comments = ['One', 'Two', 'Three'];
    return (
        <div className="App">
        <Post />
        { comments.map((el,index) => <Comment comment={el} key={index} />) }
         </div>
    );
  }
  
  export default App;
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
>>>>>>> b5e9e9b77beab97bd3c1981d320beb05b966f911
