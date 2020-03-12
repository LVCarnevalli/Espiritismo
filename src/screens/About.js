// This code is a legacy and will be modified for good practice.

import React from 'react';
import { View, StyleSheet, Text, Linking, TouchableOpacity, Image } from 'react-native';
import Colors from '../constants/Colors';
import * as GoogleAnalytics from '../services/GoogleAnalytics';
import SettingsList from 'react-native-settings-list';

class About extends React.Component {
  constructor() {
    super();
    GoogleAnalytics.pageHit('About');
  }

  render() {
    return (
      <View style={{ backgroundColor: '#EFEFF4', flex: 1 }}>
        <SettingsList borderColor="#ffffff" defaultItemSize={50}>
          <SettingsList.Item
            title="Faça seu comentário"
            onPress={() =>
              Linking.openURL('https://play.google.com/store/apps/details?id=br.verdi.espiritismo')
            }
            borderHide={'Both'}
          />
          <SettingsList.Item
            title="Desenvolvimento"
            onPress={() => Linking.openURL('https://github.com/LVCarnevalli/espiritismo')}
            borderHide={'Both'}
          />
          <SettingsList.Header
            headerStyle={{ margin: 0, height: 0.5, backgroundColor: '#A7A7AA' }}
          />
          <SettingsList.Item
            hasNavArrow={false}
            title="Conteúdo legal e políticas"
            titleStyle={{ fontSize: 18 }}
            borderHide={'Both'}
          />
          <SettingsList.Item
            title="Política de Privacidade"
            onPress={() =>
              Linking.openURL(
                'https://github.com/LVCarnevalli/espiritismo/blob/master/privacy_policy.md'
              )
            }
            borderHide={'Both'}
          />

          <SettingsList.Item
            title="by VERDI"
            itemWidth={30}
            titleStyle={{ fontSize: 10 }}
            hasNavArrow={false}
            borderHide={'Both'}
          />
        </SettingsList>
      </View>
    );
  }
}

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 10,
  },
  containerLink: {
    paddingTop: 30,
  },
  text: {
    fontSize: 22,
  },
  textLink: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.iconShare,
  },
});
