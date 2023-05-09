import React from 'react';
import { StyleSheet, View, ScrollView, Linking } from 'react-native';
import { TextNormal } from '../components/StyledText';

import * as GoogleAnalytics from '../services/GoogleAnalytics';

class Warning extends React.Component {
  constructor(props) {
    super(props);
    GoogleAnalytics.pageHit('Warning');
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <TextNormal></TextNormal>
            <TextNormal style={styles.text}>
              Esse aplicativo não será mais atualizado, estamos trabalhando em um novo aplicativo que funciona em todas as plataformas e facilita as futuras manutenções.
            </TextNormal>
            <TextNormal></TextNormal>
            <TextNormal style={styles.text}>
              É possível utilizar o website como aplicativo também, basta abrir e clicar na opção "Adicionar à tela inicial" do seu navegador. Obrigado pelo apoio.
            </TextNormal>
            <TextNormal></TextNormal>
            <TextNormal style={styles.text}>Acesse:</TextNormal>
            <TextNormal onPress={() => { 
              Linking.openURL('https://espiritismo.dev'); 
            }} style={styles.link}>
              espiritismo.dev
            </TextNormal>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  link: {
    fontSize: 20,
    color: 'black',
    textDecorationLine: 'underline'
  },
});

export default Warning;
