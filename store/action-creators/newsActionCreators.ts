import { NewsActionTypes } from '../action-types/newsActionTypes';
import { Dispatch } from 'redux';
import { NewsAction } from '../actions/newsActions';

export const clearError = () => {
  return {
    type: NewsActionTypes.SET_ERROR,
    error: null,
  };
};

export const fetchNews = () => {
  return async (dispatch: Dispatch<NewsAction>) => {
    dispatch({ type: NewsActionTypes.SET_LOADING });
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        }
      );
      if (!response.ok) {
        dispatch({
          type: NewsActionTypes.SET_ERROR,
          error: 'An error accured while loading posts',
        });
      }
      const data = await response.json();
      dispatch({ type: NewsActionTypes.SET_NEWS, news: data });
      dispatch({ type: NewsActionTypes.SET_LOADING });
    } catch (e: any) {
      dispatch({ type: NewsActionTypes.SET_ERROR, error: e });
      dispatch({ type: NewsActionTypes.SET_LOADING });
    }
  };
};
