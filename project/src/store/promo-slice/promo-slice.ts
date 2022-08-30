import {createSlice} from '@reduxjs/toolkit';
import {addFavoriteAction, fetchPromoFilmAction} from '../api-actions';
import { PromoSliceState} from '../../types/state';
import { NameSpace } from '../../utils/common';

const initialState: PromoSliceState = {
  promoFilm: {
    id: 0,
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    scoresCount: 0,
    director: '',
    starring: [],
    runTime: 0,
    genre: '',
    released: 0,
    isFavorite: false,
  },
  isLoaded: false,
  isLoadError: false,
};

export const promoSlice = createSlice({
  name: NameSpace.Promo,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isLoaded = true;
        state.isLoadError = false;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isLoaded = false;
        state.isLoadError = false;
      })

      .addCase(fetchPromoFilmAction.rejected, (state) => {
        state.isLoaded = false;
        state.isLoadError = true;
      })

      .addCase(addFavoriteAction.fulfilled, (state, action) => {
        if (state.promoFilm.id === action.payload.id) {
          state.promoFilm = action.payload;
        }
      });
  },
});
