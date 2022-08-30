import {State} from '../../types/state';
import {PlayType, NameSpace} from '../../utils/common';

export const selectPlayType = (state: State) => state[NameSpace.Player].playType;

export const selectPlayFilm = (state: State) =>
  state[NameSpace.Player].playType === PlayType.Film
    ? state[NameSpace.Film].film
    : state[NameSpace.Promo].promoFilm;
