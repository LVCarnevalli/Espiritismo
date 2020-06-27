import { Feather } from '@expo/vector-icons';
import React from 'react';
import { HeaderBackButton } from 'react-navigation';

import Layout from '../../constants/Layout';
import QuestionScreen from '../../screens/Question';

const options = ({ navigation }) => ({
  headerTitleStyle: {
    fontWeight: '400',
    textAlign: 'center',
    alignSelf: 'center',
    flex: 1,
    fontSize: 18,
  },
  headerLeft: (
    <HeaderBackButton
      onPress={() => navigation.navigate('Menu')}
      backImage={<Feather name="home" size={30} style={{ paddingLeft: Layout.headerPadding }} />}
    />
  ),
});

const QuestionStack = {
  screen: QuestionScreen,
  navigationOptions: options,
};

const ReadQuestionStack = {
  screen: QuestionScreen,
  navigationOptions: options,
};

const BookingQuestionStack = {
  screen: QuestionScreen,
  navigationOptions: options,
};

export { QuestionStack, ReadQuestionStack, BookingQuestionStack };
