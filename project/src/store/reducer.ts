import { createReducer } from '@reduxjs/toolkit';
import films from '../mocks/films';
import { Film } from '../types/film';
import { DEFAULT_GENRE, FILMS_COUNT } from '../utils/common';
import { changeGenre, getFilms, showMoreFilms } from './action';

type InitialStateTypes = {
  films: Film []
  genre: string
  filmsCount: number
}

const initialState: InitialStateTypes = {
  films: films,
  genre: DEFAULT_GENRE,
  filmsCount: FILMS_COUNT,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getFilms, (state, action) => {
      state.films = action.payload.films;
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(showMoreFilms, (state) => {
      state.filmsCount += FILMS_COUNT;
    });
  // .addCase(setFilmsCount, (state) => {
  //   state.filmsCount = FILMS_COUNT;
  // })
});

export default reducer;
