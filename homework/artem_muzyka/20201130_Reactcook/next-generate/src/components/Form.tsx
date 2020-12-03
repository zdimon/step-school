import React from "react";
import { useState } from "react";

export function Form(){
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    return(
        <div>
            <input type="email" placeholder='input email' onClick={ () => setEmail( 'a@gmail.com' ) }/><br/>
            <input type="password" placeholder='input password' onClick={() =>setPassword('1111')}/><br/>
            <input type="password" placeholder='repeat password' />
        </div>
    );
}