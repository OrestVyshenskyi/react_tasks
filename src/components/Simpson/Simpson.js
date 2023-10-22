import React from 'react';

import './Simpson.css'
const Simpson = ({item}) => {
    const {name, surname, age, info, photo} = item
    return (
        <div className={"character_block"}>
            <div><h1>{name} {surname}</h1></div>
            <div><h2>Age - {age}</h2></div>
            <div>{info}</div>
            <div><img src={photo} alt={"character photo"}/></div>
        </div>
    );
};

export {Simpson};