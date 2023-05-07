import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { HeaderBackButton } from 'react-navigation-stack';

import Layout from '../../constants/Layout';
import PrayerScreen from '../../screens/Prayer';

const PrayerStack = {
  screen: PrayerScreen,
  navigationOptions: ({ navigation }) => ({
    gestureEnabled: false,
    headerTitle: 'PRECES',
    headerTitleStyle: {
      fontWeight: '400',
      textAlign: 'center',
      alignSelf: 'center',
      flex: 1,
      fontSize: 18,
    },
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#363537',
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

export default PrayerStack;
