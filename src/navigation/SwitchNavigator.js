import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import BookingStack from './stack/BookingStack';
import MenuStack from './stack/MenuStack';
import PrayerStack from './stack/PrayerStack';
import { BookingQuestionStack, QuestionStack, ReadQuestionStack } from './stack/QuestionStack';
import SearchStack from './stack/SearchStack';
import WelcomeStack from './stack/WelcomeStack';

export default createSwitchNavigator({
  Welcome: { screen: WelcomeStack },
  Content: createSwitchNavigator({
    QuestionStack,
    ReadQuestionStack,
    BookingQuestionStack,
    SearchStack,
    BookingStack,
    MenuStack,
    PrayerStack,
  }),
});
