import { AlbumsActionTypes } from '../action-types/albumsActionTypes';

interface SetAlbums {
  type: AlbumsActionTypes.SET_ALBUMS;
  albums: any;
}

interface SetError {
  type: AlbumsActionTypes.SET_ALBUMS_ERROR;
  error: any;
}

interface SetLoading {
  type: AlbumsActionTypes.SET_LOADING;
}

export type AlbumAction = SetAlbums | SetError | SetLoading;
