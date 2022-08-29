import {createSlice} from '@reduxjs/toolkit';
import { FilmsSliceState } from '../../types/state';
import {DEFAULT_GENRE, NameSpace} from '../../utils/common';
import {addFavoriteAction, fetchFilmsAction} from '../api-actions';


const initialState: FilmsSliceState = {
  genre: DEFAULT_GENRE,
  films: [],
  isLoaded: false,
  isLoadError: false,
};

export const filmsSlice = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.genre = action.payload ?? DEFAULT_GENRE;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isLoaded = true;
        state.isLoadError = false;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isLoaded = false;
        state.isLoadError = false;
      })

      .addCase(fetchFilmsAction.rejected, (state) => {
        state.isLoaded = false;
        state.isLoadError = true;
      })

      .addCase(addFavoriteAction.fulfilled, (state, action) => {
        const index = state.films.findIndex((item: { id: number; }) => item.id === action.payload.id);
        state.films[index].isFavorite = action.payload.isFavorite;
      });
  },
});

export const {changeGenre} = filmsSlice.actions;
