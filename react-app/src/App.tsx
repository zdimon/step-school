import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

import { Post } from './Post';
import { Comment } from './Comment';
import {CommentForm} from './CommentForm'



function App() {
 
  const [users, setUsers] = useState([
    {name: 'Dima', image: '1.png', post: 'Hello!!!'},
    {name: 'Dima2', image: '1.png', post: 'Hello2!!!'},
    {name: 'Dima3', image: '1.png', post: 'Hello3!!!'}
  ]);



  const doClick = function() {
    console.log('do click');
    //users.push({name: 'Dima4', image: '1.png', post: 'Hello4!!!'});
    setUsers([]);
  }

  return (
    <div className="App">
      <Post post="test post" />
      { users.map((el,index) => <Comment user={el} key={index} />) }
      <CommentForm />
      <button onClick={doClick} > Add post </button>
    </div>
  );
}

export default App;
