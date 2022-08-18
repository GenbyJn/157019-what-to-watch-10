import { createReducer } from '@reduxjs/toolkit';
import films from '../mocks/films';
import { Film } from '../types/film';
import { DEFAULT_GENRE } from '../utils/common';
import { changeGenre, getFilms } from './action';

type InitialStateTypes = {
  films: Film [];
  genre: string
}

const initialState: InitialStateTypes = {
  films: films,
  genre: DEFAULT_GENRE
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getFilms, (state, action) => {
      state.films = action.payload.films;
    })
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    });
});

export default reducer;
