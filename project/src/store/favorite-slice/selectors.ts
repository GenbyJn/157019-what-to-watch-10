import { State } from '../../types/state';
import { NameSpace } from '../../utils/common';

export const selectFavorites = (state: State) => state[NameSpace.Favorite].favorites;

export const selectIsLoadedFavorites = (state: State) => state[NameSpace.Favorite].isLoaded;

export const selectIsLoadedError = (state: State) => state[NameSpace.Favorite].isLoadError;
