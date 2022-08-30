import { AuthorizationStatus, PlayType } from './../utils/common';
import { store } from '../store/index';
import { Film } from './film';
import { rootReducer } from '../store/root-reducer';

export type Reducer = ReturnType<typeof rootReducer>;

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AuthSliceState = {
  authStatus: AuthorizationStatus;
  avatar: string;
  isSending: boolean;
  error: string;
};

export type CommentsSliceState = {
  comments: Comment[];
  isSending: boolean;
  error: string;
}

export type FilmSliceState = {
  film: Film;
  similarFilms: Film[];
  isLoaded: boolean;
  isLoadError: boolean;
}

export type FilmsSliceState = {
  genre: string;
  films: Film[];
  isLoaded: boolean;
  isLoadError: boolean;
}

export type PromoSliceState = {
  promoFilm: Film;
  isLoaded: boolean;
  isLoadError: boolean;
}

export type FavoriteSliceState = {
  favorites: Film[];
  isLoaded: boolean;
  isLoadError: boolean;
}

export type PlayerSliceState = {
  playType: PlayType,
}
