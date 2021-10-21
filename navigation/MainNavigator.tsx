import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { screensEnabled } from 'react-native-screens';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import NewsListScreen from '../Screens/NewsListScreen';
import NewsDetailsScreen from '../Screens/NewsDetailsScreen';
import AlbumsScreen from '../Screens/AlbumsScreen';
screensEnabled();

const NewsNavigator = createStackNavigator({
  NewsList: {
    screen: NewsListScreen,
    navigationOptions: {
      headerTitle: 'News list',
      headerTitleAlign: 'center',
      headerStyle: {
        height: 88,
      },
    },
  },
  NewsDetails: {
    screen: NewsDetailsScreen,
    navigationOptions: {
      headerTitle: 'News details',
      headerTitleAlign: 'center',
      headerStyle: {
        height: 88,
      },
    },
  },
});

const AlbumsNavigator = createStackNavigator({
  Albums: {
    screen: AlbumsScreen,
    navigationOptions: {
      headerTitle: 'News list',
      headerTitleAlign: 'center',
      headerStyle: {
        height: 88,
      },
    },
  },
});

const MainNavigator = createBottomTabNavigator(
  {
    News: {
      screen: NewsNavigator,
    },
    Albums: {
      screen: AlbumsNavigator,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#466BC9',
      labelStyle: {
        fontSize: 20,
        marginBottom: 10,
      },
      style: {
        backgroundColor: 'white',
      },
    },
  }
);

export default createAppContainer(MainNavigator);
