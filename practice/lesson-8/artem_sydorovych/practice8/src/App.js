import './App.css';
import isEmail from 'validator/lib/isEmail'
import equals from 'validator/lib/equals'
import React, {useState} from 'react';



function App() {
  const [inputValues, setInputValues] = useState({
    email: '', password: '', passwordConf: ''
  });
  
  const handleChange = event => {
    inputValues.email = event.target.value;
    inputValues.pass = event.target.value;
    inputValues.conf_pass = event.target.value;
  }

  return (
  <form>
    <label>Email</label>
    <input type="text" onChange = {handleChange}/>
    <label> Password</label>
    <input  type="password" onChange = {handleChange}/>
    <label> Confirm Password</label>
    <input  type="password" onChange = {handleChange}/>
    <button >Login</button>
</form>
  );
}

export default App;
