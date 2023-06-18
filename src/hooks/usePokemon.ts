import { useState } from 'react';
import { PokemonFull } from '../interfaces/pokemon';
import { useEffect } from 'react';
import { pokeApi } from '../api/pokeApi';

const usePokemon = ({ id }: { id: string }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull);

  const loadPokemon = async () => {
    const resp = await pokeApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);


  return {
    isLoading,
    pokemon,
  };
};

export default usePokemon;
