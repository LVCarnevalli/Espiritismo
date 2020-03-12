import { createStackNavigator } from 'react-navigation';
import AboutScreen from '../../screens/About';
import React from 'react';

const AboutStack = createStackNavigator(
  {
    About: AboutScreen,
  },
  {
    headerMode: 'screen',
    cardStyle: { backgroundColor: '#FFFFFF' },
    navigationOptions: {
      tabBarVisible: false,
      headerTitle: 'SOBRE',
      headerTitleStyle: { fontWeight: '400', fontSize: 18 },
    },
  }
);

export default AboutStack;
