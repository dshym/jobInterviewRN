import { CommentsActionTypes } from '../action-types/commentsActionTypes';

interface CommentsState {
  comments: any;
  commentsError: string | null;
}

const initialState = {
  comments: [],
  commentsError: null,
};

const reducer = (state: CommentsState = initialState, action: any) => {
  switch (action.type) {
    case CommentsActionTypes.SET_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };
    case CommentsActionTypes.ADD_COMMENT:
      return {
        ...state,
        comments: state.comments.concat(action.comment),
      };
    case CommentsActionTypes.SET_COMMENTS_ERROR:
      return {
        ...state,
        commentsError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
