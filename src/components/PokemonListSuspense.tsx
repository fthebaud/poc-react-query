import * as React from 'react';
import usePokemonListSuspense from '../hooks/usePokemonListSuspense';

function PokemonListSuspense() {
  const { data } = usePokemonListSuspense();

  return (
    <div className="list">
      {data.results.map((item, index) => {
        return <h1 key={index}>{item.name}</h1>;
      })}
    </div>
  );
}

export default PokemonListSuspense;
