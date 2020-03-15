import React from 'react';
import { createStackNavigator } from 'react-navigation';

import SearchScreen from '../../screens/Search';

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
