import React from 'react';
import { View } from 'react-native';
import { HeaderBackButton } from 'react-navigation-stack';

import SpiritismScreen from '../../../screens/kardec/Spiritism';

const SpiritismStack = {
  screen: SpiritismScreen,
  navigationOptions: ({ navigation }) => ({
    headerTitle: 'O que é Espiritismo?',
    headerLeft: () => (
      <HeaderBackButton labelVisible={false} onPress={() => navigation.navigate('Kardec')} tintColor={'#000'} />
    ),
    headerTintColor: '#000',
    headerTitleStyle: {
      fontSize: 18,
      textAlign: 'center',
    },
    headerRight: () => <View></View>,
  }),
};

export default SpiritismStack;
