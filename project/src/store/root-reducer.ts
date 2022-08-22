import { combineReducers } from '@reduxjs/toolkit';
import { promoSlice } from './promo-slice/promo-slice';
import { SliceName } from '../utils/common';

export const rootReducer = combineReducers({
  [SliceName.Promo]: promoSlice.reducer,
});
