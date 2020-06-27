import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import AboutStack from './stack/AboutStack';
import BookingStack from './stack/BookingStack';
import MenuStack from './stack/MenuStack';
import PrayerStack from './stack/PrayerStack';
import { BookingQuestionStack, QuestionStack, ReadQuestionStack } from './stack/QuestionStack';
import SearchStack from './stack/SearchStack';
import WelcomeStack from './stack/WelcomeStack';
import KardecStack from './stack/KardecStack';
import HistoryStack from './stack/kardec/HistoryStack';
import BooksStack from './stack/kardec/BooksStack';
import SpiritismStack from './stack/kardec/SpiritismStack';


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
      Kardec: KardecStack,
      History: HistoryStack,
      Books: BooksStack,
      Spiritism: SpiritismStack
    },
    {
      tabBarVisible: false,
      headerMode: 'screen',
      cardStyle: { backgroundColor: '#FFFFFF' },
    }
  ),
});
