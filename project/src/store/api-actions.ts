import { AxiosError, AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Film } from '../types/film';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AppRoute, TabName } from '../utils/common';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { Comment, NewComment } from '../types/comment';
import { redirectToRoute } from './actions';

export const fetchFilmsAction = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    return data;
  },
);

export const fetchFilmAction = createAsyncThunk<Film, string, {
  state: State,
  extra: AxiosInstance
}>(
  'films/fetchFilm',
  async (id, { extra: api }) => {
    const { data } = await api.get<Film>(`${APIRoute.Films}/${id}`);
    return data;
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<Film[], string, {
  extra: AxiosInstance
}>(
  'film/fetchSimilarFilms',
  async (id: string, {extra: api}) => {
    const {data} = await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`);
    return data;
  }
);

export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, {
  state: State,
  extra: AxiosInstance
}>(
  'promo/fetchPromoFilm',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Film>(APIRoute.Promo);
    return data;
  },
);

export const addFavoriteAction = createAsyncThunk<Film, { id: number, status: number }, {
  extra: AxiosInstance
}>(
  'favorite/addToFavorite',
  async ({id, status}, {extra: api}) => {
    const {data} = await api.post<Film>(`${APIRoute.Favorite}/${id}/${status}`);
    return data;
  }
);

export const fetchCommentsAction = createAsyncThunk<Comment[], string, {
  extra: AxiosInstance
}>(
  'film/fetchComments',
  async (id: string, {extra: api}) => {
    const {data} = await api.get<Comment[]>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

export const sendCommentAction = createAsyncThunk<Comment[], NewComment, {
  dispatch: AppDispatch,
  extra: AxiosInstance,
}>(
  'film/sendComment',
  async ({filmId, comment, rating}, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.post<Comment[]>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
      dispatch(redirectToRoute(`${APIRoute.Films}/${filmId}?tab=${TabName.Reviews}`));
      return data;
    } catch (err) {
      const error = err as AxiosError<{ error: string }>;
      return rejectWithValue(error);
    }
  }
);

export const checkAuthAction = createAsyncThunk<string, undefined, {
  extra: AxiosInstance
}>(
  'auth/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data.avatarUrl;
  }
);

export const loginAction = createAsyncThunk<string, AuthData, {
  dispatch: AppDispatch,
  extra: AxiosInstance,
}>(
  'auth/login',
  async ({login: email, password}, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Main));
      return data.avatarUrl;
    } catch (err) {
      const error = err as AxiosError<{ error: string }>;
      return rejectWithValue(error.response?.data.error);
    }
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  extra: AxiosInstance
}>(
  'auth/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export const fetchFavoritesAction = createAsyncThunk<Film[], undefined, {
  extra: AxiosInstance,
}>(
  'favorite/fetchFavorites',
  async (_args, {extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Favorite);
    return data;
  }
);
