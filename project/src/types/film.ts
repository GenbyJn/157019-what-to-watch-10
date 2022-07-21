export type Stars = string[];

export type Film =
  {
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: Stars;
  runTime: number;
  genre: string;
  released: number;
  id: number;
  isFavorite: boolean;
  videoLink: string;
  previewVideoLink: string;
  };

