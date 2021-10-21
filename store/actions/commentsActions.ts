import { CommentsActionTypes } from '../action-types/commentsActionTypes';

interface SetComments {
  type: CommentsActionTypes.SET_COMMENTS;
  comments: any;
}

interface SendComment {
  type: CommentsActionTypes.SEND_COMMENT;
  comment: string;
}

interface SetCommentsError {
  type: CommentsActionTypes.SET_COMMENTS_ERROR;
  error: any;
}

interface AddComment {
  type: CommentsActionTypes.ADD_COMMENT;
  comment: any;
}

export type CommentsAction =
  | SetComments
  | SendComment
  | SetCommentsError
  | AddComment;
