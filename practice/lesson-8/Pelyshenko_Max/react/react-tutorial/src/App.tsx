import React, { MutableRefObject, useRef } from 'react';
import validator from 'validator';
import './App.css';

interface FormState 
{
  email: string
  password: string
  confirm_password: string
}

function App() 
{
  const emailRef = useRef({ value: '' })
  const passwordRef = useRef({ value: '' })

  const [formState, setFormState] = React.useState<FormState>({
    email: '',
    password: '',
    confirm_password: ''
  })
  const Change = (key: string) => (e: any) => {
    const { target: { value } } = e
    setFormState({
      ...formState,
      [key]: value
    } as FormState)
  } 

  const Submit = (e: any) => 
  {
    e.preventDefault()

    // validation
    if (!validator.isEmail(emailRef.current.value)) {
      alert('Email is not correct!!!')
      return 
    } 
    //else if (validator.isLength)
    
    else{
        alert(`${emailRef.current.value} - ${passwordRef.current.value}`)

    }

  }

  return (
    <div className="App">
      <form onSubmit={Submit}>
        <input ref={emailRef as MutableRefObject<any>}  type='email' placeholder="Email"
               onChange={Change('email')} />
        <br />

        <input ref={passwordRef as MutableRefObject<any>}  type='password' placeholder="Password" 
               onChange={Change('password')} />
        <br />

        <input type='password' placeholder="Confirm password" onChange={Change('confirm_password')} />
        <br />

        <button type='submit'>Submit</button> 
      </form>
    </div>
  );
}

export default App;
