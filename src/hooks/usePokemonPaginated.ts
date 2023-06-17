import { useEffect, useRef, useState } from 'react';
import { pokeApi } from '../api/pokeApi';
import { PokemonBasic, PokemonResponse, Result } from '../interfaces/pokemon';


export const usePokemonPaginated = () => {

  const [basicPokemon, setBasicPokemon] = useState<PokemonBasic[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemons = async () => {
    setIsLoading(true);
    const resp = await pokeApi.get<PokemonResponse>(nextPageUrl.current);
    nextPageUrl.current = resp.data.next;
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
    setBasicPokemon([...basicPokemon, ...newPokemonList]);
    setIsLoading(false);
  };
  useEffect(() => {
    loadPokemons();
  }, []);

  // const nextPageUrl = ;


  return {
    isLoading,
    basicPokemon,
    loadPokemons,
  };
};
