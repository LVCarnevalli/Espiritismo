import { createStackNavigator } from 'react-navigation';
import AboutScreen from '../../screens/About';

const AboutStack = createStackNavigator(
  {
    About: AboutScreen,
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      tabBarVisible: false,
    },
  }
);

export default AboutStack;
