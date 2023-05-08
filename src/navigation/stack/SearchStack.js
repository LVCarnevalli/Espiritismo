import React from 'react';

import SearchScreen from '../../screens/Search';

const SearchStack = {
  screen: SearchScreen,
  navigationOptions: {
    gestureEnabled: false,
    header: () => null,
  }
};

export default SearchStack;
