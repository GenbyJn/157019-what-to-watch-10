import { combineReducers } from '@reduxjs/toolkit';
import { promoSlice } from './promo-slice/promo-slice';
import { NameSpace } from '../utils/common';
import { filmsSlice } from './films-slice/films-slice';
import { filmSlice } from './film-slice/film-slice';
import { authSlice } from './auth-slice/auth-slice';
import { commentsSlice } from './comments-slice/comments-slice';
import { favoriteSlice } from './favorite-slice/favorite-slice';
import { playerSlice } from './player-slice/player-slice';

export const rootReducer = combineReducers({
  [NameSpace.Auth]: authSlice.reducer,
  [NameSpace.Promo]: promoSlice.reducer,
  [NameSpace.Films]: filmsSlice.reducer,
  [NameSpace.Film]: filmSlice.reducer,
  [NameSpace.Favorite]: favoriteSlice.reducer,
  [NameSpace.Comments]: commentsSlice.reducer,
  [NameSpace.Player]: playerSlice.reducer,
});
