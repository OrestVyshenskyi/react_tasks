import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Character} from "../Character/Character";

const Characters = () => {

    const [characters, setCharacters] = useState()

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character').then(value => value.data).then(value => setCharacters(value))
    }, []);

    return (
        <div>
            {characters &&
                characters.results.map(character =><Character key={character.id} item={character}/>)
            }
        </div>
    );
};

export {Characters};