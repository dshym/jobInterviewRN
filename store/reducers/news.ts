import { NewsActionTypes } from '../action-types/newsActionTypes';

interface NewsState {
  loading: boolean;
  error: string | null;
  news: any;
}

const initialState = {
  loading: false,
  error: null,
  news: [],
};

const reducer = (state: NewsState = initialState, action: any) => {
  switch (action.type) {
    case NewsActionTypes.SET_NEWS:
      return {
        ...state,
        news: action.news,
      };
    case NewsActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case NewsActionTypes.SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};

export default reducer;
