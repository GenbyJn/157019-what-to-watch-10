import { createReducer } from '@reduxjs/toolkit';
import films from '../mocks/films';
import { Film } from '../types/film';
import { DEFAULT_GENRE } from '../utils/common';
import { changeGenre, getFilms } from './action';

type InitialStateTypes = {
  genre: string;
  films: Film [];
}

const initialState: InitialStateTypes = {
  genre: DEFAULT_GENRE,
  films: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload.ganre;
    })
    .addCase(getFilms, (state, action) => {
      state.films = action.payload.films;
    });
});

export default reducer;
