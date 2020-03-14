import { createStackNavigator } from 'react-navigation';
import SearchScreen from '../../screens/Search';
import React from 'react';

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: false,

    }),
  }
);

export default SearchStack;
