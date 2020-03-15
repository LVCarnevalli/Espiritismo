import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import MenuIcon from '../../components/MenuIcon';
import BookingScreen from '../../screens/Booking';

const BookingStack = createStackNavigator(
  {
    Booking: BookingScreen,
  },
  {
    headerMode: 'screen',
    navigationOptions: ({ navigation }) => ({
      tabBarVisible: false,
      headerTitle: 'LEITURA',
      headerTitleStyle: {
        fontWeight: '400',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
        fontSize: 18,
        fontFamily: 'open-sans-regular',
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#2196f3',
        elevation: 0,
        borderBottomWidth: 0,
      },
      headerRight: <View></View>,
      headerLeft: <MenuIcon navigation={navigation} iconStyle={{ color: '#FFFFFF' }} />,
    }),
  }
);

export default BookingStack;
