import { useQuery } from '@tanstack/react-query';
import { fetchPokemons } from '../clients/pokemon.client';

const usePokemonListSuspense = () => {
  return useQuery({
    queryKey: ['pokemonList', 'suspense'],
    queryFn: () => fetchPokemons(),
    retry: false,
    suspense: true,
  });
};

export default usePokemonListSuspense;
