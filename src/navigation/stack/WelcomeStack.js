import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from '../../screens/Welcome';

const WelcomeStack = {
  screen: WelcomeScreen,
  navigationOptions: {
    headerMode: 'none',
    navigationOptions: {
      tabBarVisible: false,
    },
  }
};

export default WelcomeStack;
