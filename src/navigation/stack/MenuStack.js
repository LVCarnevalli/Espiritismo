import * as React from 'react';

import MenuScreen from '../../screens/Menu';

const MenuStack = {
  screen: MenuScreen,
  navigationOptions: {
    headerTitle: 'espiritismo',
    headerBackTitle: '',
    headerTruncatedBackTitle: '',
    headerBackTitleStyle: {
      color: '#000',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontSize: 35,
      fontFamily: 'grotes-sans-regular',
      textAlign: 'center',
      flex: 1,
    },
    headerLeft: ()=> null,
    gestureEnabled: false,
  },
};

export default MenuStack;
