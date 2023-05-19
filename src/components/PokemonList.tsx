import * as React from 'react';
import usePokemonList from '../hooks/usePokemonList';

function PokemonList() {
  const { isLoading, data, isError, error, refetch, isRefetching } =
    usePokemonList();

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="list">
      <div>
        <button onClick={() => refetch()}>refetch</button>
        {isRefetching ? 'refetching' : ''}
      </div>
      {data.results.map((item, index) => {
        return <h1 key={index}>{item.name}</h1>;
      })}
    </div>
  );
}

export default PokemonList;
