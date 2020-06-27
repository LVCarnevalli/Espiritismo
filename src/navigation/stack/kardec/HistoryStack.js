import React from 'react';
import { View } from 'react-native';
import { HeaderBackButton } from 'react-navigation';

import HistoryScreen from '../../../screens/kardec/History';

const HistoryStack = {
  screen: HistoryScreen,
  navigationOptions: ({ navigation }) => ({
    headerTitle: 'Quem foi Kardec?',
    headerLeft: (
      <HeaderBackButton onPress={() => navigation.navigate('Kardec')} tintColor={'#000'} />
    ),
    headerTintColor: '#000',
    headerTitleStyle: {
      fontSize: 18,
      textAlign: 'center',
      flex: 1,
    },
    headerRight: <View></View>,
  }),
};

export default HistoryStack;
