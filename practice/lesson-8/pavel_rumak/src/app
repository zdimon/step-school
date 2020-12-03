import React,{MutableRefObject, useRef} from 'react';
//import {Article} from './components/Article/Article'

import './App.css';



/*const arr1 = arr.map((item, i, arr)=> {
  console.log(item,i,arr)
  return item * 2


  const arr1 = arr.map((item, i, arr)=> {
  const obj = {name: 'Alex'}
  return {...obj,age:item*2}
})*/





function App() {

  const emailRef = useRef({ value: ''})

 /* const handleSubmit= (e:any)=>{
    e.preventDefault()
    const email = e.target.elements[0].value
    const password = e.target.elements[1].value
    console.log(email, password)
  }*/
      /*<form onSubmit={handleSubmit}>
        <input type="email"></input>
        <input type="password"></input>
        <button type="submit">Submit</button>
      </form>*/


      interface formState {
        email: string
        password: string
      }

      const [formstate, setFormState] = React.useState<formState>({
        email:'',
        password: ''
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
        console.log('FormState', emailRef.current.value)
      }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input ref={emailRef as MutableRefObject<any>}  type="email" onChange={handleChange('email')} />
        <input type="password" onChange={handleChange('password')} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
