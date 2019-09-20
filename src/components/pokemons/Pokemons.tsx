import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../shared/loader/Loader';
import CustomTable from '../shared/table/Table';
import { makeStyles } from '@material-ui/core';


const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loaded, setIsLoaded] = useState(false);
    const useStyles = makeStyles(theme => ({
        wrapper: {
            display: 'flex',
            position: 'relative',
            flexDirection: 'column'
        },
    }));
    const classes = useStyles();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokedex/1')
            .then(response => {
                setPokemons(response.data)
                setIsLoaded(true)
            })
            .catch(error => console.log(error))
    }, []);

    if (loaded) {
        return(
            <div className={classes.wrapper}>
                <CustomTable pokemons={pokemons} loaded={loaded}/>
            </div>
        )
    } else {
        return(
            <div className={classes.wrapper}>
                <Loader />
            </div>
        )
    }
}


export default Pokemons;