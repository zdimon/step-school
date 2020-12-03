import React, { useState } from 'react';
import './App.css';

export function Form(){
    return(
        <div >
            <input type="email" placeholder='input email'/>
            <input type="password" placeholder='input password'/>
            <input type="password" placeholder='repeat password'/>
        </div>
    );
}