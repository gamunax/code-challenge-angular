export interface Character {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: CharacterResults[];
}

export interface CharacterResults {
  id: number;
  name: string;
  species: string;
  gender: string;
  image: string;
}
