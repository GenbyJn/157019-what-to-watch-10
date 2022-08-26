import {createSelector} from '@reduxjs/toolkit';
import {State} from '../../types/state';
import {DEFAULT_GENRE, NameSpace} from '../../utils/common';
import {Film} from '../../types/film';

export const selectActiveGenre = (state: State) => state[NameSpace.Films].genre;

export const selectFilms = (state: State) => state[NameSpace.Films].films;

export const selectIsLoadedFilms = (state: State) => state[NameSpace.Films].isLoaded;

export const selectIsLoadedError = (state: State) => state[NameSpace.Films].isLoadError;

export const selectFilterFilms = createSelector(
  [selectFilms, selectActiveGenre],
  (films, genre) =>
    genre === DEFAULT_GENRE
      ? films
      : films.filter((item: Film) => item.genre.toLowerCase() === genre)
);

export const selectGenres = createSelector(
  selectFilms,
  (films) => [...new Set(films.map((film) => film.genre))],
);

export const selectFavoritesCount = createSelector(
  selectFilms,
  (films) => films.filter((item) => item.isFavorite).length,
);
