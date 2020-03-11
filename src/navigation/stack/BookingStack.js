import { createStackNavigator } from 'react-navigation';
import BookingScreen from '../../screens/Booking';

const BookingStack = createStackNavigator(
  {
    Booking: BookingScreen,
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      tabBarVisible: false,
    },
  }
);

export default BookingStack;
