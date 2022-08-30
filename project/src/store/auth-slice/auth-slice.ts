import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../utils/common';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { AuthSliceState } from '../../types/state';

const initialState: AuthSliceState = {
  authStatus: AuthorizationStatus.Unknown,
  avatar: '',
  isSending: false,
  error: '',
};

export const authSlice = createSlice({
  name: NameSpace.Auth,
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.avatar = action.payload;
        state.error = '';
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.avatar = '';
        state.error = '';
      })
      .addCase(loginAction.pending, (state) => {
        state.isSending = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authStatus = AuthorizationStatus.Auth;
        state.avatar = action.payload;
        state.isSending = false;
        state.error = '';
      })
      .addCase(loginAction.rejected, (state, action: AnyAction) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.avatar = '';
        state.isSending = false;
        state.error = action.payload;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.NoAuth;
        state.avatar = '';
        state.error = '';
      });
  },
});

export const {setError} = authSlice.actions;
