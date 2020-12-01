import React from 'react';

export function Comment(props: any) {
    return (
        <div>
            <img src={props.user.avatar} width='10%'/>
            <p>{props.user.name}</p>
            {props.user.comment}
        </div>
    )
}