import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Post } from './Post';
import { Comment } from './Comment';



function App2() {
  const comments = ['One', 'Two', 'Three'];
  return (
    <div className="App">
      <img src="https://cs8.pikabu.ru/post_img/big/2016/03/13/6/1457857526122871958.jpg" className="App-logo" alt="logo" />
      <Post />
      { comments.map((el,index) => <Comment comment={el} key={index} />) }
      <img src="https://cs8.pikabu.ru/post_img/big/2016/03/13/6/1457857526122871958.jpg" className="App-logo" alt="logo" />
    </div>
  );
}

export default App2;
