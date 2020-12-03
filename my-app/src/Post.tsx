import React from 'react';

<<<<<<< HEAD
export function Post() {
    return (
        <div>
            <h1>Post component</h1>
=======
export function Post(props: any) {
    return (
        <div>
<<<<<<< HEAD
<<<<<<<< HEAD:my-app/src/Post.tsx
            <h1>Бабки крутяться,лавеха мутиться</h1>
========
            <h1>{ props.post }</h1>
>>>>>>>> 1f1c8e2be7b52e63e8e527007a381a31b6e9c604:react-app/src/Post.tsx
=======
            <h1>{ props.post }</h1>
>>>>>>> 1f1c8e2be7b52e63e8e527007a381a31b6e9c604
>>>>>>> b5e9e9b77beab97bd3c1981d320beb05b966f911
        </div>
    )
}