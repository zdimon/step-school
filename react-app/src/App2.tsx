import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Post } from './Post';
import { Comment } from './Comment';



function App2() 
{
  const comments = ['One', 'Two', 'Three'];
  return (
    <div className="App2">
      <Post />
      { comments.map((el,index) => <Comment comment={el} key={index} />) }
    </div>
  );
}

export default App2;
