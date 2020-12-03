import React from 'react';
import './App.css';
import { Post } from './Post';
import { Comment } from './Comment';

function App2(props: any) {
    const comments = ['One', 'Two', 'Three'];
    return (
        <div className="App">
        <Post />
        { comments.map((el,index) => <Comment comment={el} key={index} />) }
         </div>
    );
  }
  
  export default App2;