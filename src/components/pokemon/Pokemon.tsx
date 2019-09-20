import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Data from './Data';
import Loader from '../shared/loader/Loader';


const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2${window.location.pathname}`;
        axios.get(`${url}`)
            .then(response => {
                setPokemon(response.data)
                setLoaded(true)
            })
            .catch(error => console.log(error))
    }, []);

    if (loaded) {
        return(
            <div>
                <Data pokemon={pokemon} loaded={loaded}/>
            </div>
        )
    } else {
        return(
            <div>
                <Loader />
            </div>
        )
    }

    
}

export default Pokemon;