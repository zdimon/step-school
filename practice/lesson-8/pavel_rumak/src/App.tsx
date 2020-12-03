import React,{MutableRefObject, useRef} from 'react';
import './App.css';

function App() {
  const emailRef = useRef({ value: ''})
  const passwordRef = useRef({ value: ''})
  const passwordCheckRef = useRef({ value: ''})

  interface formState {
    email: string
    password: string
    passwordCheck: string
  }

  const [formstate, setFormState] = React.useState<formState>({
    email:'',
    password: '',
    passwordCheck: ''
  })

  const handleChange = (key: string)=> (e: any)=>{
    const {target :{value}}=e
    setFormState({
      ...formstate,
      [key]:value
    } as formState)
   
  }

  const handleSubmit= (e:any)=>{
    e.preventDefault()
    console.log('FormState', emailRef.current.value, passwordRef.current.value, passwordCheckRef.current.value)
    alert('Email'+' '+emailRef.current.value+' '+'Password'+' '+passwordRef.current.value+' '+'PasswordCheck'+' '+passwordCheckRef.current.value)
  }
//===============================================================================//
                                                                                 // 
    var em = /\+\d{1,3}\(\d{3}\)\d{7}/                                           // 
    var pas = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/              //
    function passcheck(){                                                        //
      if (passwordRef.current.value!=passwordCheckRef.current.value) {           // ne ispol'zyemui kod
          alert('Passwords are not equal')                                       //
      }                                                                          //
    }                                                                            //
//===============================================================================//
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input ref={emailRef as MutableRefObject<any>} type="email" onChange={handleChange('email')} ></input>
        <input  ref={passwordRef as MutableRefObject<any>} type="password" name="password" onChange={handleChange('password')} ></input>
        <input ref={passwordCheckRef as MutableRefObject<any>} type="password" name="passwordCheck" onChange={handleChange('passowrdCheck')}></input>
        <button type="submit" disabled >Submit</button>
      </form>
    </div>
  );
}



export default App;
