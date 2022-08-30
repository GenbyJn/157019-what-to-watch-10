import { State } from '../../types/state';
import { NameSpace } from '../../utils/common';

export const selectAuthStatus = (state: State) => state[NameSpace.Auth].authStatus;

export const selectAvatar = (state: State) => state[NameSpace.Auth].avatar;

export const selectError = (state: State) => state[NameSpace.Auth].error;

export const selectIsLoginSending = (state: State) => state[NameSpace.Auth].isSending;
