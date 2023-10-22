import React from 'react';

import './Simpsons.css'
import {Simpson} from "../Simpson/Simpson";

const Simpsons = ({item}) => {


    return (
        <div className={"characters"}>
            {item.map(simpson => <Simpson item={simpson}/>)}
        </div>
    );
};

export {Simpsons};