import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import WelcomeStack from './stack/WelcomeStack';
import { QuestionStack, ReadQuestionStack, BookingQuestionStack } from './stack/QuestionStack';
import SearchStack from './stack/SearchStack';
import BookingStack from './stack/BookingStack';
import PrayerStack from './stack/PrayerStack';
import MenuStack from './stack/MenuStack';

export default createSwitchNavigator({
  Welcome: { screen: WelcomeStack },
  Content: createSwitchNavigator({
    QuestionStack,
    ReadQuestionStack,
    BookingQuestionStack,
    SearchStack,
    BookingStack,
    MenuStack,
    PrayerStack
  }),
});
