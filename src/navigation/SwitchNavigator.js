// This code is a legacy and will be modified for good practice.

import React from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import WelcomeScreen from '../screens/Welcome';
import QuestionScreen from '../screens/Question';
import SearchScreen from '../screens/Search';
import BookingScreen from '../screens/Booking';
import About from '../screens/About';

const WelcomeStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
  },
  {
    headerMode: 'none',
  }
);

WelcomeStack.navigationOptions = {
  tabBarVisible: false,
};

const QuestionStack = createStackNavigator({
  Question: QuestionScreen,
});

QuestionStack.navigationOptions = {
  tabBarVisible: false,
  drawerLabel: 'ESTUDO ALEATÓRIO',
};

const ReadQuestionStack = createStackNavigator({
  ReadQuestion: QuestionScreen,
});

ReadQuestionStack.navigationOptions = {
  tabBarVisible: false,
  drawerLabel: () => null,
};

const BookingQuestionStack = createStackNavigator({
  BookingQuestion: QuestionScreen,
});

BookingQuestionStack.navigationOptions = {
  tabBarVisible: false,
  drawerLabel: () => null,
};

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    headerMode: 'none',
  }
);

SearchStack.navigationOptions = {
  tabBarVisible: false,
  drawerLabel: 'CAPÍTULOS',
};

const BookingStack = createStackNavigator({
  Booking: BookingScreen,
});

BookingStack.navigationOptions = {
  tabBarVisible: false,
  drawerLabel: 'LEITURA',
};

const AboutStack = createStackNavigator({
  About: About,
});

AboutStack.navigationOptions = {
  tabBarVisible: false,
  drawerLabel: 'SOBRE',
};

export default createSwitchNavigator({
  Welcome: { screen: WelcomeStack },
  Content: createDrawerNavigator(
    {
      ReadQuestionStack,
      BookingQuestionStack,
      QuestionStack,
      SearchStack,
      BookingStack,
      AboutStack,
    },
    {
      drawerWidth: 175,
    }
  ),
});
