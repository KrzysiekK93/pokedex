import * as types from "../types";
import initialState from "../initialState";

export default function pokemonsReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.LOAD_POKEMONS_PENDING:
        return {
            ...state,
            pending: true
    };
    case types.LOAD_POKEMONS_SUCCESS:
        return {
            ...state,
            pending: false,
            pokemons: action.pokemons
    };
    case types.LOAD_POKEMONS_ERROR:
        return {
            ...state,
            pending: false,
            pokemons: action.error
    };
    default:
        return state;
  }
}

export const getPokemons = (state: any) => state.pokemons.pokemons;
export const getPokemonsPending = (state: any) => state.pokemons.pending;
export const getPokemonsError = (state: any) => state.pokemons.error;