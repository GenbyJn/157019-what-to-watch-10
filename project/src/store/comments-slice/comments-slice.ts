import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/common';
import { fetchCommentsAction, sendCommentAction } from '../api-actions';
import { CommentsSliceState } from './../../types/state';

const initialState: CommentsSliceState = {
  comments: [],
  isSending: false,
  error: '',
};

export const commentsSlice = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(sendCommentAction.pending, (state) => {
        state.isSending = true;
      })
      .addCase(sendCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isSending = false;
        state.error = '';
      })
      .addCase(sendCommentAction.rejected, (state, action: AnyAction) => {
        state.isSending = false;
        state.error = action.payload;
      });
  },
});
