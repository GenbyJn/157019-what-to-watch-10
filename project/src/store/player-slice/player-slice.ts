import { createSlice } from '@reduxjs/toolkit';
import { PlayerSliceState } from '../../types/state';
import { PlayType, NameSpace } from '../../utils/common';

const initialState: PlayerSliceState = {
  playType: PlayType.Unknown,
};

export const playerSlice = createSlice({
  name: NameSpace.Player,
  initialState,
  reducers: {
    setPlayType: (state, action) => {
      state.playType = action.payload;
    }
  }
});

export const {setPlayType} = playerSlice.actions;
