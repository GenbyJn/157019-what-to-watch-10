import { AuthorizationStatus } from './../utils/common';
import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const requireAuthorisation = createAction<AuthorizationStatus>('user/requireAuthorisation');

export const changeGenre = createAction('films/changeGenre',
  (value) => ({payload: value})
);

export const getFilms = createAction('films/getFilms',
  (films) => ({payload: films.ganre})
);

export const showMoreFilms = createAction('films/showMore');

export const setFilmsCount = createAction('films/setFilmsCount');

export const clearGenre = createAction('films/clearGenre');

export const setError = createAction<string | null | unknown>('user/setError');
