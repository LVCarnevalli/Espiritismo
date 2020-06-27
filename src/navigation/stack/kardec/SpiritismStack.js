import React from 'react';
import { View } from 'react-native';

import SpiritismScreen from '../../../screens/kardec/Spiritism';
import { HeaderBackButton } from 'react-navigation';

const SpiritismStack = {
  screen: SpiritismScreen,
  navigationOptions: ({ navigation }) => ({
    headerTitle: 'O que é Espiritismo?',
    headerLeft: <HeaderBackButton onPress={() => navigation.navigate('Kardec')}
                                  tintColor={'#000'}/>,
    headerTintColor: '#000',
    headerTitleStyle: {
      fontSize: 18,
      textAlign: 'center',
      flex: 1,
    },
    headerRight: <View></View>,
  }),
};

export default SpiritismStack;
