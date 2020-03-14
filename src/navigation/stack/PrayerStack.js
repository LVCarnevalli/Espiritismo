import { createStackNavigator } from 'react-navigation';
import PrayerScreen from '../../screens/Prayer';
import MenuIcon from '../../components/MenuIcon';
import React from 'react';
import { View } from 'react-native';

const PrayerStack = createStackNavigator(
  {
    Prayer: PrayerScreen,
  },
  {
    headerMode: 'screen',
    cardStyle: { backgroundColor: '#363537' },
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: false,
      headerTitle: 'PRECES',
      headerTitleStyle: {
        fontWeight: '400',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
        fontSize: 18,
        fontFamily: 'open-sans-regular'
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#363537',
        elevation: 0,
        borderBottomWidth: 0,
      },
      headerRight: <View></View>,
      headerLeft: <MenuIcon navigation={navigation} iconStyle={{ color: '#FFFFFF' }} />,
    }),
  }
);

export default PrayerStack;
