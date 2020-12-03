import React, {useState} from 'react';
import './App.css';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [confirm, setConfirm] = useState('');

  var validator = require('validator');

  const validate = () =>
  {
    return validateEmail() && checkPasswords();
  }

  const handleEmail = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  }
  const handlePassword = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPass(event.target.value);
  }
  const handleConfirm = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setConfirm(event.target.value);
  }

  function validateEmail() : boolean
  {
    console.log(validator.isEmail( email ));
    return validator.isEmail( email );
  }

  function checkPasswords() : boolean
  {
    if( validator.isLength(password,{min: 6, max: undefined}))
    {
      if( validator.equals(password, confirm))
      {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="App">
      <form action="">
        <input type="password" name="password" onChange={handlePassword}></input>
        <input type="password" name="confirm-password" onChange={handleConfirm}></input>
        <input type="email" name="email" onChange={handleEmail}></input>
        <input type="button" name="button" value="PUSH ME" onClick={ () => { validate()?alert(`${email}  ${password}`):alert("no"); } }></input>
      </form>
    </div>
  );
}

export default App;
