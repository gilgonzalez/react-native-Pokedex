import { useEffect, useState } from 'react';
import { pokeApi } from '../api/pokeApi';
import { PokemonBasic, PokemonResponse, Result } from '../interfaces/pokemon';


export const usePokemonSearch = () => {

  const [basicPokemon, setBasicPokemon] = useState<PokemonBasic[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  const loadPokemons = async () => {
    const resp = await pokeApi.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200');
    convertPokemonResponse(resp.data.results);
  };

  const convertPokemonResponse = (arrPokemon: Result[]) => {
    const newPokemonList: PokemonBasic[] = arrPokemon.map(({ name, url }) => {
      const urlSegments = url.split('/');
      const id = urlSegments[urlSegments.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return {
        name,
        picture,
        id,
        color: '',
      };
    });
    setBasicPokemon(newPokemonList);
    setIsFetching(false);
  };
  useEffect(() => {
    loadPokemons();
  }, []);

  // const nextPageUrl = ;


  return {
    isFetching,
    basicPokemon,
  };
};
