import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import * as Icon from '@expo/vector-icons';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as firebase from 'firebase/app';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import {
  setCustomImage,
  setCustomText,
  setCustomTextInput,
  setCustomTouchableOpacity,
  setCustomView,
} from 'react-native-global-props';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './src/components/Loading';
import AppNavigator from './src/navigation/SwitchNavigator';
import configureStore from './src/store/Store';

SplashScreen.preventAutoHideAsync();

const { persistor, store } = configureStore();

const customFontFamily = {
  style: {
    fontFamily: 'open-sans-regular',
  },
};

class App extends React.Component {
  static defaultProps = {
    skipLoadingScreen: false,
  };

  state = {
    isLoadingComplete: false,
  };

  constructor(props) {
    super(props);

    if (!firebase.getApps().length) {
      firebase.initializeApp({});
    }
  }

  async componentDidMount() {
    try {
      await this._loadResourcesAsync();
    } catch (e) {
      console.warn(e);
    } finally {
      setCustomText(customFontFamily);
      setCustomView(customFontFamily);
      setCustomTextInput(customFontFamily);
      setCustomImage(customFontFamily);
      setCustomTouchableOpacity(customFontFamily);

      this.setState({ isLoadingComplete: true });
      await SplashScreen.hideAsync();
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/BgSun.png'),
        require('./assets/images/BgBlood.png'),
        require('./assets/images/BgMoon.png'),
        require('./assets/images/IconGesture.png'),
        require('./assets/images/IconLightbulb.png'),
        require('./assets/images/IconQuestion.png'),
        require('./assets/images/IconSearch.png'),
        require('./assets/images/IconRead.png'),
        require('./assets/images/IconSave.png'),
        require('./assets/images/IconLove.png'),
        require('./assets/images/Loading.gif'),
        require('./assets/images/IconFEBnet.png'),
        require('./assets/images/IconKardecpedia.png'),
        require('./assets/images/Kardec.jpeg'),
        require('./assets/images/LivroAGenese.png'),
        require('./assets/images/LivroObrasPostumas.png'),
        require('./assets/images/LivroOCeuEOInferno.png'),
        require('./assets/images/LivroOEvangelhoSegundoEspiritismo.png'),
        require('./assets/images/LivroOLivroDosEspiritos.png'),
        require('./assets/images/LivroOLivroDosMediuns.png'),
        require('./assets/images/LivroOQueEEspiritismo.png'),
        require('./assets/images/RevistaEspirita.png'),
      ]),
      Font.loadAsync({
        ...Icon.Feather.font,
        'open-sans-bold': require('./assets/fonts/OpenSans/OpenSans-Bold.ttf'),
        'open-sans-extra-bold': require('./assets/fonts/OpenSans/OpenSans-ExtraBold.ttf'),
        'open-sans-regular': require('./assets/fonts/OpenSans/OpenSans-Regular.ttf'),
        'open-sans-italic': require('./assets/fonts/OpenSans/OpenSans-Italic.ttf'),
        'open-sans-light': require('./assets/fonts/OpenSans/OpenSans-Light.ttf'),
        'open-sans-semi-bold': require('./assets/fonts/OpenSans/OpenSans-SemiBold.ttf'),
        'grotes-sans-regular': require('./assets/fonts/GrotesSansDemoRegular.ttf'),
      }),
    ]);
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
         <></>
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Provider store={store}>
            <Loading />
            <PersistGate loading={null} persistor={persistor}>
              <ActionSheetProvider>
                <AppNavigator />
              </ActionSheetProvider>
            </PersistGate>
          </Provider>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
