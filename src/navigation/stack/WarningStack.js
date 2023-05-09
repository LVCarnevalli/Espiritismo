import React from 'react';
import { View } from 'react-native';

import WarningScreen from '../../screens/Warning';

const WarningStack = {
  screen: WarningScreen,
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
    },
    headerRight: () => <View></View>,
  },
};

export default WarningStack;
