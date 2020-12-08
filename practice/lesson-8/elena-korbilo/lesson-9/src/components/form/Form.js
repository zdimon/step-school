import React from 'react'

export default function Form() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChangeNick = () => {
        
    }
    const handleChangeEmail = () => {
        
    }
    const handleChangeAge = () => {
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            Nick <input type='text' onChange={handleChangeNick} name="nick"/><br />
            Email <input type='email'  onChange={handleChangeEmail} name="email"/><br />
            Gender <input type='radio' name="gender" value='male'/>M
            <input type='radio' name="gender" value='female'/>F<br />
            Age<input type='number'  onChange={handleChangeAge} name="age"/><br />
            <button type="submit">Login</button>
            </form>
        </div>
    )
}
