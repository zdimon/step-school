import React from 'react';
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
           
        </div>
    )
}