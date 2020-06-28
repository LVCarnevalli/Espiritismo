import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import * as Icon from '@expo/vector-icons';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import * as firebase from 'firebase';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import * as FirebaseCore from 'expo-firebase-core';
import {
  setCustomImage,
  setCustomText,
  setCustomTextInput,
  setCustomTouchableOpacity,
  setCustomView,
} from 'react-native-global-props';
import ignoreWarnings from 'react-native-ignore-warnings';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Loading from './src/components/Loading';
import AppNavigator from './src/navigation/SwitchNavigator';
import configureStore from './src/store/Store';

const { persistor, store } = configureStore();

ignoreWarnings('Setting a timer');
ignoreWarnings('componentWillReceiveProps has been renamed');
ignoreWarnings('componentWillMount has been renamed');
ignoreWarnings('componentWillUpdate has been renamed');

const customFontFamily = {
  style: {
    fontFamily: 'open-sans-regular',
  },
};
setCustomText(customFontFamily);
setCustomView(customFontFamily);
setCustomTextInput(customFontFamily);
setCustomImage(customFontFamily);
setCustomTouchableOpacity(customFontFamily);

class App extends React.Component {
  static defaultProps = {
    skipLoadingScreen: false,
  };

  state = {
    isLoadingComplete: false,
  };

  constructor(props) {
    super(props);

    if (!firebase.apps.length) {
      firebase.initializeApp(FirebaseCore.DEFAULT_APP_OPTIONS);
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

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
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
