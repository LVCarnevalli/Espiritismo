// This code is a legacy and will be modified for good practice.

import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {AppLoading} from 'expo';
import { Asset } from 'expo-asset';
import * as Icon from '@expo/vector-icons';
import * as Font from 'expo-font';
import Config from './src/constants/Config';
import * as firebase from 'firebase';
import {Provider} from 'react-redux';
import configureStore from './src/store/Store';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from "./src/navigation/SwitchNavigator";

const {persistor, store} = configureStore();
import ignoreWarnings from 'react-native-ignore-warnings';

ignoreWarnings('Setting a timer');
ignoreWarnings('componentWillReceiveProps has been renamed');
ignoreWarnings('componentWillMount has been renamed');

export default class App extends React.Component {
    state = {
        isLoadingComplete: false,
    };

    constructor() {
        super();

        if (!firebase.apps.length) {
            firebase.initializeApp(Config.FirebaseConfig);
        }
    }

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
                    {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                    <Provider store={store}>
                        <PersistGate loading={null} persistor={persistor}>
                            <AppNavigator/>
                        </PersistGate>
                    </Provider>
                </View>
            );
        }
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require('./assets/images/BgSun.png'),
                require('./assets/images/BgBlood.png'),
                require('./assets/images/BgMoon.png'),
                require('./assets/images/IconGesture.png'),
            ]),
            Font.loadAsync({
                ...Icon.Ionicons.font,
                'open-sans-bold': require('./assets/fonts/OpenSans/OpenSans-Bold.ttf'),
                'open-sans-extra-bold': require('./assets/fonts/OpenSans/OpenSans-ExtraBold.ttf'),
                'open-sans-regular': require('./assets/fonts/OpenSans/OpenSans-Regular.ttf'),
                'open-sans-italic': require('./assets/fonts/OpenSans/OpenSans-Italic.ttf'),
                'open-sans-light': require('./assets/fonts/OpenSans/OpenSans-Light.ttf'),
                'open-sans-semi-bold': require('./assets/fonts/OpenSans/OpenSans-SemiBold.ttf'),
            }),
        ]);
    };

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({isLoadingComplete: true});
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
