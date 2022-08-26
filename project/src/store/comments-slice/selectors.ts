import {State} from '../../types/state';
import { NameSpace } from '../../utils/common';

export const selectComments = (state: State) => state[NameSpace.Comments].comments;

export const selectIsSendingComment = (state: State) => state[NameSpace.Comments].isSending;

export const selectCommentError = (state: State) => state[NameSpace.Comments].error;
