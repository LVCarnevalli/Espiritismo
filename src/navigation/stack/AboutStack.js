import React from 'react';
import { View } from 'react-native';

import AboutScreen from '../../screens/About';

const AboutStack = {
  screen: AboutScreen,
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

export default AboutStack;
