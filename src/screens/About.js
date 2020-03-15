import React from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import SettingsList from 'react-native-settings-list';

import * as GoogleAnalytics from '../services/GoogleAnalytics';

class About extends React.Component {
  constructor(props) {
    super(props);
    GoogleAnalytics.pageHit('About');
  }

  render() {
    return (
      <View style={styles.container}>
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
          <SettingsList.Header headerStyle={styles.separator} />
          <SettingsList.Item
            hasNavArrow={false}
            title="Conteúdo legal e políticas"
            titleStyle={styles.title}
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
            titleStyle={styles.footer}
            hasNavArrow={false}
            borderHide={'Both'}
          />
        </SettingsList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFF4',
    flex: 1,
  },
  separator: {
    margin: 0,
    height: 0.5,
    backgroundColor: '#A7A7AA',
  },
  title: {
    fontSize: 18,
  },
  footer: {
    fontSize: 10,
  },
});

export default About;
