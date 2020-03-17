import { Dimensions } from 'react-native';
import { Platform } from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  headerPadding: Platform.OS === 'ios'? 9 : 0
};
