import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchAlbums } from '../store/action-creators/albumsActionCreators';

import AlbumItem from '../components/AlbumItem';

interface Album {
  userId: string;
  id: string;
  title: string;
}

const AlbumsScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { albums, loading, albumsError } = useTypedSelector(
    (state) => state.albums
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  if (albumsError) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{albumsError}</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#466BC9" />
      </View>
    );
  }

  return (
    <FlatList<Album>
      onRefresh={() => {
        dispatch(fetchAlbums());
      }}
      refreshing={isRefreshing}
      data={albums}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        return (
          <AlbumItem id={item.id} title={item.title} userId={item.userId} />
        );
      }}
      numColumns={2}
    />
  );
};

export default AlbumsScreen;
