import React from 'react';

const Character = ({item}) => {
    const {id, name, status, image} = item
    return (

        <div>

            <div>{id} - {name}</div>
            <div>{status}</div>
            <div><img src={image} alt={"photo"}/></div>

        </div>

    );
};

export {Character};