import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction(
  'films/changeGenre',
  (value) => ({payload: value})
);

export const getFilms = createAction(
  'films/getFilms',
  (films) => ({payload: films.ganre})
);

export const showMoreFilms = createAction('films/showMore');

export const setFilmsCount = createAction('films/setFilmsCount');

export const clearGenre = createAction('films/clearGenre');
