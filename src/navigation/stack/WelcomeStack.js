import { createStackNavigator } from 'react-navigation';

import WelcomeScreen from '../../screens/Welcome';

const WelcomeStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarVisible: false,
    },
  }
);

export default WelcomeStack;
