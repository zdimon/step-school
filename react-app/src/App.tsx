import React from 'react';
import './App.css';

import { Post } from './Post';
import { Comment } from './Comment';
import {CommentForm} from './CommentForm'


function App() {
  const users = [
    {name: 'Dima', image: '1.png', post: 'Hello!!!'},
    {name: 'Dima2', image: '1.png', post: 'Hello2!!!'},
    {name: 'Dima3', image: '1.png', post: 'Hello3!!!'}
  ];
  return (
    <div className="App">
      <Post />
      { users.map((el,index) => <Comment user={el} key={index} />) }
      <CommentForm />
    </div>
  );
}

export default App;
