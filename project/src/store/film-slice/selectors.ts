import { State } from '../../types/state';
import { NameSpace } from '../../utils/common';

export const selectFilm = (state: State) => state[NameSpace.Film].film;

export const selectSimilarFilms = (state: State) => state[NameSpace.Film].similarFilms;

export const selectIsLoadedFilm = (state: State) => state[NameSpace.Film].isLoaded;

export const selectIsLoadedError = (state: State) => state[NameSpace.Film].isLoadError;
