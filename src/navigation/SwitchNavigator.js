import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';

import AboutStack from './stack/AboutStack';
import WarningStack from './stack/WarningStack';
import BookingStack from './stack/BookingStack';
import BooksStack from './stack/kardec/BooksStack';
import HistoryStack from './stack/kardec/HistoryStack';
import SpiritismStack from './stack/kardec/SpiritismStack';
import KardecStack from './stack/KardecStack';
import MenuStack from './stack/MenuStack';
import PrayerStack from './stack/PrayerStack';
import { BookingQuestionStack, QuestionStack, ReadQuestionStack } from './stack/QuestionStack';
import SearchStack from './stack/SearchStack';
import WelcomeStack from './stack/WelcomeStack';

const Stack = createStackNavigator();

export default function() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeStack.screen} options={WelcomeStack.navigationOptions} />
        <Stack.Screen name="Menu" component={MenuStack.screen} options={MenuStack.navigationOptions} />
        <Stack.Screen name="Question" component={QuestionStack.screen} options={QuestionStack.navigationOptions} />
        <Stack.Screen name="ReadQuestion" component={ReadQuestionStack.screen} options={ReadQuestionStack.navigationOptions} />
        <Stack.Screen name="BookingQuestion" component={BookingQuestionStack.screen} options={BookingQuestionStack.navigationOptions} />
        <Stack.Screen name="Search" component={SearchStack.screen} options={SearchStack.navigationOptions} />
        <Stack.Screen name="Booking" component={BookingStack.screen} options={BookingStack.navigationOptions} />
        <Stack.Screen name="About" component={AboutStack.screen} options={AboutStack.navigationOptions} />
        <Stack.Screen name="Warning" component={WarningStack.screen} options={WarningStack.navigationOptions} />
        <Stack.Screen name="Kardec" component={KardecStack.screen} options={KardecStack.navigationOptions} />
        <Stack.Screen name="History" component={HistoryStack.screen} options={HistoryStack.navigationOptions} />
        <Stack.Screen name="Books" component={BooksStack.screen} options={BooksStack.navigationOptions} />
        <Stack.Screen name="Spiritism" component={SpiritismStack.screen} options={SpiritismStack.navigationOptions} />
        <Stack.Screen name="Prayer" component={PrayerStack.screen} options={PrayerStack.navigationOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}