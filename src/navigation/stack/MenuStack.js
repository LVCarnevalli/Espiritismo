import { createStackNavigator } from 'react-navigation';
import MenuScreen from '../../screens/Menu';

const MenuStack = createStackNavigator(
  {
    Menu: MenuScreen,
  },
  {
    headerMode: 'screen',
    cardStyle: { backgroundColor: '#FFFFFF' },
    navigationOptions: {
      tabBarVisible: false,
      headerTitle: 'espiritismo',
      headerTitleStyle: {
        fontSize: 35,
        fontFamily: 'grotes-sans-regular',
        textAlign: 'center',
        flex: 1,
      },
    },
  }
);

export default MenuStack;
