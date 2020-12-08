import React from 'react'
//import validator from 'validator';

interface FormState {
    email: string
    password: string
    conf_pass: string
}

function Form() {
    // const handleSubmit = (e: any) => {
    //     e.preventDefault();
    //     const email = e.target.elements[0].value;
    //     const pass = e.target.elements[1].value;
    //     const conf_pass = e.target.elements[2].value;
    //     alert(email + " " + pass);
    // }

    const [formState, setFormState] = React.useState<FormState>({
        email: '',
        password: '',
        conf_pass: ''
    })

    

    const handleChange = (e: any) => {
        const email = e.target.value;
        const pass = e.target.value;
        const conf_pass = e.target.value;
        console.log(email, pass)
    }

    return (
        <div>
            <form>
                <input type='email' placeholder='Email' name='email' onChange={handleChange}/><br />
                <input type='password' placeholder='Password' name='password' onChange={handleChange}/><br />
                <input type='password' placeholder='Confirm password' name='confirm_password' onChange={handleChange}/><br />
                <button type='submit' disabled>Login</button>
            </form>
        </div>
    )
}

export default Form
