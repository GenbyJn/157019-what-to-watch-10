import { State } from '../../types/state';
import { NameSpace } from '../../utils/common';

export const selectPromoFilm = (state: State) => state[NameSpace.Promo].promoFilm;

export const selectIsLoadingPromo = (state: State) => state[NameSpace.Promo].isDataLoading;

export const selectIsPromoError = (state: State) => state[NameSpace.Films].isLoadError;
