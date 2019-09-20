import React, { useState } from 'react';
import TextFields from '../input/Input';
import Data from './Data';


export default function CustomTable(props: any) {
  const [pokemons, setPokemons] = useState(props.pokemons.pokemon_entries);

  const filterList = (value: string) => {
    return props.pokemons.pokemon_entries.filter(((el: any) => el.pokemon_species.name.toLowerCase().includes(value.toLowerCase())))
  }

  const onChange = (e: any) => {
      const text = e.target.value;
      const filteredList = filterList(text);
      setPokemons(filteredList)
  }

  return (
    <div>
      <TextFields onChange={onChange} text="Search by name" />
      <Data pokemons={pokemons} />
    </div>
  )
}