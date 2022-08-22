import { State } from '../../types/state';
import { SliceName } from '../../utils/common';

export const selectPromoFilm = (state: State) => state[SliceName.Promo].promoFilm;

export const selectIsLoadingPromo = (state: State) => state[SliceName.Promo].isDataLoading;
