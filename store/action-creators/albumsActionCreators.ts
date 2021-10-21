import { AlbumsActionTypes } from '../action-types/albumsActionTypes';
import { AlbumAction } from '../actions/albumsActions';
import { Dispatch } from 'redux';

export const fetchAlbums = () => {
  return async (dispatch: Dispatch<AlbumAction>) => {
    dispatch({ type: AlbumsActionTypes.SET_LOADING });
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/albums',
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        }
      );
      if (!response.ok) {
        dispatch({
          type: AlbumsActionTypes.SET_ALBUMS_ERROR,
          error: 'An error accured while loading albums',
        });
      }
      const data = await response.json();
      dispatch({ type: AlbumsActionTypes.SET_ALBUMS, albums: data });
      dispatch({ type: AlbumsActionTypes.SET_LOADING });
    } catch (e) {
      console.log(e);
      dispatch({ type: AlbumsActionTypes.SET_ALBUMS_ERROR, error: e });
      dispatch({ type: AlbumsActionTypes.SET_LOADING });
    }
  };
};
