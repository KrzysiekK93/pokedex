import * as types from "../types";
import axios from 'axios';


export function loadPokemonsPending() {
  return { 
        type: types.LOAD_POKEMONS_PENDING, 
    };
}

export function loadPokemonsSuccess(pokemons: any) {
    return { 
        type: types.LOAD_POKEMONS_SUCCESS, 
        pokemons 
    };
  }

export function loadPokemonsError(error: any) {
    return { 
        type: types.LOAD_POKEMONS_ERROR, 
        error
    };
}

export function loadPokemons() {
    return (dispatch: any) => {
        dispatch(loadPokemonsPending());
        axios.get('https://pokeapi.co/api/v2/pokedex/1')
        .then(response => {
            dispatch(loadPokemonsSuccess(response.data));
            return response.data;
        })
        .catch(error => {
            dispatch(loadPokemonsError(error));
        })
    }
}