export interface PokemonResponse {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
export interface PokemonBasic {
  name: string;
  picture: string;
  id: string;
  color?: string;
}
