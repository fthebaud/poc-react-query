import { useQuery } from '@tanstack/react-query';
import { fetchPokemons } from '../clients/pokemon.client';

const usePokemonList = () => {
  return useQuery({
    queryKey: ['pokemonList', 'loading'],
    queryFn: () => fetchPokemons(),
    retry: false,
  });
};

export default usePokemonList;
