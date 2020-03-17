import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import AboutStack from './stack/AboutStack';
import BookingStack from './stack/BookingStack';
import MenuStack from './stack/MenuStack';
import PrayerStack from './stack/PrayerStack';
import { BookingQuestionStack, QuestionStack, ReadQuestionStack } from './stack/QuestionStack';
import SearchStack from './stack/SearchStack';
import WelcomeStack from './stack/WelcomeStack';

export default createSwitchNavigator({
  Welcome: { screen: WelcomeStack },
  Content: createStackNavigator(
    {
      Menu: MenuStack,
      Question: QuestionStack,
      ReadQuestion: ReadQuestionStack,
      BookingQuestion: BookingQuestionStack,
      Search: SearchStack,
      Booking: BookingStack,
      Prayer: PrayerStack,
      About: AboutStack,
    },
    {
      tabBarVisible: false,
      headerMode: 'screen',
      cardStyle: { backgroundColor: '#FFFFFF' },
    }
  ),
});
