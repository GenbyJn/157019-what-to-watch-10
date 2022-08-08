import { createAction } from '@reduxjs/toolkit';
import { DEFAULT_GENRE } from '../utils/common';

export const changeGenre = createAction(
  'films/changeGenre',
  (ganre = DEFAULT_GENRE) => ({payload: ganre})
);

export const getFilms = createAction(
  'films/getFilms',
  (films) => ({payload: films.ganre})
);

export const clearGenre = createAction('films/clearGenre');
