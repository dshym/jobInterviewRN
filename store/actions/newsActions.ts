import { NewsActionTypes } from '../action-types/newsActionTypes';

interface SetNews {
  type: NewsActionTypes.SET_NEWS;
  news: any;
}

interface SetError {
  type: NewsActionTypes.SET_ERROR;
  error: any;
}

interface SetLoading {
  type: NewsActionTypes.SET_LOADING;
}

export type NewsAction = SetNews | SetError | SetLoading;
