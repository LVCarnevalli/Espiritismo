import React from 'react';
import { View } from 'react-native';
import { HeaderBackButton } from 'react-navigation';

import BooksScreen from '../../../screens/kardec/Books';

const BooksStack = {
  screen: BooksScreen,
  navigationOptions: ({ navigation }) => ({
    headerTitle: 'Livros fundamentais',
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

export default BooksStack;
