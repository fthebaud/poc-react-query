export type PokeResponse = {
  count: number;
  next: string | null;
  previour: string | null;
  results: Pokemon[];
};

export type Pokemon = {
  name: string;
  url: string;
};
