import React from 'react';
<<<<<<< HEAD

export function Comment(props: any) {
    return (
        <div>
            <h1>{ props.comment }</h1>
=======
import { PrimaryButton } from '@fluentui/react';
import { DatePicker, DayOfWeek, IDatePickerStrings, mergeStyleSets } from 'office-ui-fabric-react';

const controlClass = mergeStyleSets({
    control: {
      margin: '0 0 15px 0',
      maxWidth: '300px',
    },
  });

export function Comment(props: any) {

    const _alertClicked = function() {
        console.log('Button was clicked');
    }

    return (
        <div>
            <h1>Username: { props.user.name } Post: { props.user.post }</h1>
            <img width="50" src={props.user.image} />
            <PrimaryButton text="Standard" onClick={_alertClicked} />
           
>>>>>>> b5e9e9b77beab97bd3c1981d320beb05b966f911
        </div>
    )
}