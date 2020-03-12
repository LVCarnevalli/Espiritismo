import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import WelcomeStack from './stack/WelcomeStack';
import { QuestionStack, ReadQuestionStack, BookingQuestionStack } from './stack/QuestionStack';
import SearchStack from './stack/SearchStack';
import BookingStack from './stack/BookingStack';
import AboutStack from './stack/AboutStack';
import MenuStack from './stack/MenuStack';
import AboutScreen from '../screens/About';
import MenuScreen from '../screens/Menu';

export default createSwitchNavigator({
  Welcome: { screen: WelcomeStack },
  Content: createSwitchNavigator({
    QuestionStack,
    ReadQuestionStack,
    BookingQuestionStack,
    SearchStack,
    BookingStack,
    MenuStack,
  }),
});
