import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Loader from '../shared/loader/Loader';
import CustomTable from '../shared/table/Table';
import { makeStyles } from '@material-ui/core';
import { getPokemonsPending, getPokemons, getPokemonsError } from '../../redux/reducers/pokemonsReducer';
import { loadPokemons } from '../../redux/actions/pokemonsActions';

const Pokemons = (props: any) => {
    const [loaded, setIsLoaded] = useState(false);
    const useStyles = makeStyles(() => ({
        wrapper: {
            display: 'flex',
            position: 'relative',
            flexDirection: 'column'
        },
    }));
    const classes = useStyles();

    useEffect(() => {
        if (!props.pokemons.name) {
            props.loadPokemons();
        } else {
            setIsLoaded(true)
        }
    }, [props.pokemons.name]);
    
    if (loaded) {
        return(
            <div className={classes.wrapper}>
                <CustomTable pokemons={props.pokemons} loaded={loaded}/>
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

function mapStateToProps(state: any){
    return {
        error: getPokemonsPending(state),
        pokemons: getPokemons(state),
        pending: getPokemonsError(state)
    }
}

const mapDispatchToProps = {
    loadPokemons
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pokemons);