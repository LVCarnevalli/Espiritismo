import { createStackNavigator } from 'react-navigation';
import SearchScreen from '../../screens/Search';

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarVisible: false,
    },
  }
);

export default SearchStack;
