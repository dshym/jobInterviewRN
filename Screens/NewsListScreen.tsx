import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import * as newsActions from '../store/action-creators/newsActionCreators';

import NewsItem from '../components/NewsItem';

interface New {
  id: string;
  title: string;
  body: string;
}

const NewsListScreen: React.FC = (props: any) => {
  const [isRefrashing, setIsRefrashing] = useState(false);
  const { news, loading, error } = useTypedSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsActions.fetchNews());
  }, []);

  const refreshData = () => {
    setIsRefrashing(true);
    dispatch(newsActions.fetchNews());
    setIsRefrashing(false);
  };

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{error}</Text>
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
    <FlatList<New>
      onRefresh={refreshData}
      refreshing={isRefrashing}
      data={news}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <NewsItem
          id={item.id}
          title={item.title}
          description={item.body}
          navigation={props.navigation}
        />
      )}
    />
  );
};

export default NewsListScreen;
