import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Post } from './Post'
import { Comment } from './Comment'
import { getSyntheticLeadingComments } from 'typescript';

function App() {
  const comments = [
    {avatar: './foto1.jpg', name: 'Liza', comment: 'Hello everyone!'}, 
    {avatar: './foto2.jpg', name: 'Mark', comment: 'Hi, how are you?'}, 
    {avatar: './foto3.jpg', name: 'Ilon', comment: 'Hello. I am fine. Thank you!'}
  ];
  
  return (
    <div className="App">
      <Post />
      { comments.map((el, index) => <Comment user={el} key={index} />)}
    </div>
  );
}

export default App;
