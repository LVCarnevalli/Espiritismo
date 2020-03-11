import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import WelcomeStack from './stack/WelcomeStack';
import { QuestionStack, ReadQuestionStack, BookingQuestionStack } from './stack/QuestionStack';
import SearchStack from './stack/SearchStack';
import BookingStack from './stack/BookingStack';
import AboutStack from './stack/AboutStack';
import MenuStack from './stack/MenuStack';

export default createSwitchNavigator({
  Welcome: { screen: WelcomeStack },
  Content: createSwitchNavigator({
    MenuStack,
    QuestionStack,
    ReadQuestionStack,
    BookingQuestionStack,
    SearchStack,
    BookingStack,
    AboutStack,
  }),
});
