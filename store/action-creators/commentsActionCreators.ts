import { Dispatch } from 'redux';
import { CommentsActionTypes } from '../action-types/commentsActionTypes';
import { CommentsAction } from '../actions/commentsActions';

export const addComment = (comment: any) => {
  return { type: CommentsActionTypes.ADD_COMMENT, comment: comment };
};

export const SetCommentsError = (error: string) => {
  return {
    type: CommentsActionTypes.SET_COMMENTS_ERROR,
    error: error,
  };
};

export const fetchComments = (id: string) => {
  return async (dispatch: Dispatch<CommentsAction>) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );

      if (!response.ok) {
        dispatch({
          type: CommentsActionTypes.SET_COMMENTS_ERROR,
          error: 'An error accured while loading comments',
        });
      }
      const data = await response.json();

      dispatch({ type: CommentsActionTypes.SET_COMMENTS, comments: data });
    } catch (e) {
      dispatch({
        type: CommentsActionTypes.SET_COMMENTS_ERROR,
        error: 'An error accured while loading comments',
      });
      console.log(e);
    }
  };
};

export const sendComment = (postId: string, comment: string) => {
  return async (dispatch: Dispatch<CommentsAction>) => {
    const testComment = {
      postId: postId,
      id: Math.random().toString(),
      name: 'Example name',
      body: comment,
      email: 'test@test.com',
    };

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(testComment),
        }
      );

      if (!response.ok) {
        //error handling
      }

      if (response.ok) {
        dispatch({
          type: CommentsActionTypes.ADD_COMMENT,
          comment: testComment,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};
