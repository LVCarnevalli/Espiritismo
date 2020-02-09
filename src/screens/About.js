// This code is a legacy and will be modified for good practice.

import React from 'react';
import { View, StyleSheet, Text, Linking, TouchableOpacity } from 'react-native';
import { TextBold, TextNormal } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import * as GoogleAnalytics from '../services/GoogleAnalytics';

class About extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'SOBRE',
      headerTitleStyle: { fontWeight: '400', fontSize: 18 },
      headerLeft: (
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={{ paddingLeft: 10 }}>
            <Text onPress={() => navigation.openDrawer()}>
              <Ionicons name="md-menu" size={30} color={Colors.iconShare} />
            </Text>
          </View>
        </View>
      ),
    };
  };

  constructor() {
    super();
    GoogleAnalytics.pageHit('About');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerLink}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://play.google.com/store/apps/details?id=br.verdi.espiritismo')
            }>
            <TextBold style={styles.textLink}>Avaliação Google Play Store</TextBold>
          </TouchableOpacity>
        </View>
        <View style={styles.containerLink}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://github.com/LVCarnevalli/espiritismo/blob/master/privacy_policy.md'
              )
            }>
            <TextBold style={styles.textLink}>Política de Privacidade</TextBold>
          </TouchableOpacity>
        </View>
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
