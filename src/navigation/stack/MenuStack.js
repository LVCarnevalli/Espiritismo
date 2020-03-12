import { createStackNavigator } from 'react-navigation';
import MenuScreen from '../../screens/Menu';
import AboutScreen from '../../screens/About';
import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import * as React from 'react';
import MenuIcon from '../../components/MenuIcon';

const MenuStack = createStackNavigator(
  {
    Menu: {
      screen: MenuScreen,
    },
    About: {
      screen: AboutScreen,
    },
  },
  {
    headerMode: 'screen',
    cardStyle: { backgroundColor: '#FFFFFF' },
    navigationOptions: {
      tabBarVisible: false,
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
    },
  }
);

export default MenuStack;
