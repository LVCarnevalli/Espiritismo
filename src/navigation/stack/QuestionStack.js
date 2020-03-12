import { createStackNavigator } from 'react-navigation';
import React from 'react';
import QuestionScreen from '../../screens/Question';
import MenuIcon from '../../components/MenuIcon';

const options = {
  headerMode: 'screen',
  cardStyle: { backgroundColor: '#FFFFFF' },
  navigationOptions: ({ navigation }) => ({
    tabBarVisible: false,
    headerTitleStyle: { fontWeight: '400', fontSize: 18 },
    headerLeft: <MenuIcon navigation={navigation} />,
  }),
};

const QuestionStack = createStackNavigator(
  {
    Question: QuestionScreen,
  },
  options
);

const ReadQuestionStack = createStackNavigator(
  {
    ReadQuestion: QuestionScreen,
  },
  options
);

const BookingQuestionStack = createStackNavigator(
  {
    BookingQuestion: QuestionScreen,
  },
  options
);

export { QuestionStack, ReadQuestionStack, BookingQuestionStack };
