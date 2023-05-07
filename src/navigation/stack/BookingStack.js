import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { HeaderBackButton } from 'react-navigation-stack';

import Layout from '../../constants/Layout';
import BookingScreen from '../../screens/Booking';

const BookingStack = {
  screen: BookingScreen,
  navigationOptions: ({ navigation }) => ({
    gestureEnabled: false,
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
    headerRight: () => <View></View>,
    headerLeft: () => (
      <HeaderBackButton
        labelVisible={false}
        onPress={() => navigation.navigate('Menu')}
        backImage={
          () => <Feather
            name="home"
            size={30}
            style={{ color: '#FFFFFF', paddingLeft: Layout.headerPadding }}
          />
        }
      />
    ),
  }),
};

export default BookingStack;
