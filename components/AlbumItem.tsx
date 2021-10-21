import React, { useEffect, useState } from 'react';
import { Image, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-elements';

interface AlbumProps {
  userId: string;
  id: string;
  title: string;
}

const AlbumItem: React.FC<AlbumProps> = ({ userId, id, title }) => {
  // const [imageUrl, setimageUrl] = useState(
  //   ''
  // );

  // const fetchImage = async (albumId: string) => {
  //   try {
  //     const response = await fetch(
  //       `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
  //     );
  //     const data = await response.json();
  //     setimageUrl(data[0].thumbnailUrl);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   fetchImage(id);
  // }, []);

  return (
    <Card containerStyle={styles.card}>
      <TouchableOpacity
        activeOpacity={0.4}
        style={{ width: '100%', height: '100%' }}
        onPress={() => console.log('album pressed')}
      >
        <Text>{title}</Text>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
  },
});

export default AlbumItem;
