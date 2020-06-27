import React from 'react';
import { View } from 'react-native';

import BooksScreen from '../../../screens/kardec/Books';
import { HeaderBackButton } from 'react-navigation';

const BooksStack = {
  screen: BooksScreen,
  navigationOptions: ({ navigation }) => ({
    headerTitle: 'Outras obras',
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

export default BooksStack;
