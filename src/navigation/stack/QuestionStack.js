import { createStackNavigator } from 'react-navigation';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import QuestionScreen from '../../screens/Question';

const options = {
  headerMode: 'screen',
  cardStyle: { backgroundColor: '#FFFFFF' },
  navigationOptions: ({ navigation }) => ({
    tabBarVisible: false,
    headerTitleStyle: { fontWeight: '400', fontSize: 18 },
    headerLeft: (
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ paddingLeft: 10 }}>
          <Text>
            <Feather name="home" size={30} onPress={() => navigation.navigate('Menu')} />
          </Text>
        </View>
      </View>
    ),
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
