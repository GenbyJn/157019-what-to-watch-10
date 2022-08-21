import { createReducer } from '@reduxjs/toolkit';
import films from '../mocks/films';
import { Film } from '../types/film';
import { DEFAULT_GENRE, FILMS_COUNT, AuthorizationStatus } from '../utils/common';
import { changeGenre, showMoreFilms, loadFilms, requireAuthorisation } from './action';

type InitialStateTypes = {
  films: Film []
  genre: string
  filmsCount: number
  authorizationStatus: AuthorizationStatus,
  error: string | null
}

const initialState: InitialStateTypes = {
  films: films,
  genre: DEFAULT_GENRE,
  filmsCount: FILMS_COUNT,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(requireAuthorisation, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(showMoreFilms, (state) => {
      state.filmsCount += FILMS_COUNT;
    });
});

export default reducer;
