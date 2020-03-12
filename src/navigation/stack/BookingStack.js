import { createStackNavigator } from 'react-navigation';
import BookingScreen from '../../screens/Booking';
import MenuIcon from '../../components/MenuIcon';
import React from 'react';
import { View } from 'react-native';

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
