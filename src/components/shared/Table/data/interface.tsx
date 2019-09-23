//Interface type declatarion
export default interface ITableData {
    pokemons: Array<IData>
}

export interface IData {
    entry_number: number,
    pokemon_species: IPokemonSpacies
}

export interface IPokemonSpacies {
    name: string,
    url: string
}

