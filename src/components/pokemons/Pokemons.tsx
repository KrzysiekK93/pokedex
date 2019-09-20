import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../shared/loader/Loader';
import CustomTable from '../shared/Table/Table';
import TextFields from '../shared/input/Input';
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

    const filterList = (value: string) => {
        
    }

    const onChange = (e: any) => {
        const text = e.target.value;
        console.log(text)
        const filteredList = filterList(text);
    }

    if (loaded) {
        return(
            <div className={classes.wrapper}>
                <TextFields onChange={onChange} text="Search by name" />
                <CustomTable pokemons={pokemons}/>
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