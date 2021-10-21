import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import NewsNavigator from './navigation/MainNavigator';

import newsReducer from './store/reducers/news';
import albumsReducer from './store/reducers/albums';
import commentsReducer from './store/reducers/comments';

const reducers = combineReducers({
  news: newsReducer,
  albums: albumsReducer,
  comments: commentsReducer,
});

export type RootState = ReturnType<typeof reducers>;

const store = createStore(reducers, applyMiddleware(thunk));

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <NewsNavigator />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
