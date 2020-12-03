import isEmail from 'validator/lib/isEmail';
import validator from 'validator'
import React from 'react';
import {useState} from 'react'
import {useRef} from 'react'
import './App.css';

interface InputValue {
  email: string
  password: string
  ConPass: string
}


function App() {

  const emailRef = useRef({ value: '' })
  const passwordRef = useRef({value: ''})
  const ConfigPassRef = useRef({value:''})
  const buttonRef = useRef({value:''})

  const [formState, setFormState] = React.useState<InputValue>({
    email: '',
    password: '',
    ConPass: ''
  })

  const handleChange = (key: string) => (e: any) => {
    const { target: { value } } = e
    setFormState({
      ...formState,
      [key]: value
    } as InputValue)
  } 

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(emailRef.current.value)
  }

  var validator = require('validator');
  

  let checkEmail = function(){
    if(validator.isEmail(emailRef.current.value))
    {
      return true;
    }
  }

  let checkPassword = function(){
    if(validator.isEmail(passwordRef.current.value))
    {
      return true;
    }
  }
  
  let checkAll = function(){
    if(checkEmail() && checkPassword())
    {
      document.buttonRef.current.disabled = false;
    }
  }

  return (
    <div className="App">
      <script type="text/javascript" src="validator.min.js"></script>
      <form>
        <input ref={emailRef as MutableRefObject<any>} type="email" placeholder="Email"></input><br/>
        <input ref={passwordRef as MutableRefObject<any>} type="password" placeholder="Password"></input><br/>
        <input ref={ConfigPassRef as MutableRefObject<any>} type="password" placeholder="Config password"></input>
        <button ref={buttonRef as MutableRefObject<any>} type="submit" disabled>Save</button>
      </form>
    </div>
  );

  checkEmail();
  checkPassword();

  checkAll();
}

export default App;
