import { PokeResponse } from '../types';

export async function fetchPokemons(): Promise<PokeResponse> {
  return await fetch(`https://pokeapi.co/api/v2/pokemon`).then((response) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(response.json()), 5000);
    });
  });
}
