import { AlbumsActionTypes } from '../action-types/albumsActionTypes';

interface AlbumsState {
  albums: any;
  loading: boolean;
  albumsError: string | null;
}

const initialState = {
  albums: [],
  loading: false,
  albumsError: null,
};

const reducer = (state: AlbumsState = initialState, action: any) => {
  switch (action.type) {
    case AlbumsActionTypes.SET_ALBUMS:
      return {
        ...state,
        albums: action.albums,
      };
    case AlbumsActionTypes.SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case AlbumsActionTypes.SET_ALBUMS_ERROR:
      return {
        ...state,
        albumsError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
