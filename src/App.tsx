import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PokemonList from "./components/PokemonList";
import PokemonListSuspense from "./components/PokemonListSuspense";

const queryClient = new QueryClient();

function Loading() {
  return <div>LOADING! (suspended)</div>;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Pokemons</h1>
      <h2>isLoading:</h2>
      <PokemonList />
      <h2>Suspense:</h2>
      <Suspense fallback={<Loading />}>
        <PokemonListSuspense />
        <ReactQueryDevtools initialIsOpen />
      </Suspense>
    </QueryClientProvider>
  );
}
