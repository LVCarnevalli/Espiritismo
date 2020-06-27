import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import * as GoogleAnalytics from '../../services/GoogleAnalytics';
import { TextBold, TextNormal } from '../../components/StyledText';

class Spiritism extends React.Component {

  constructor(props) {
    super(props);
    GoogleAnalytics.pageHit('KardecSpiritism');
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <TextNormal style={[styles.text, styles.wrapLine]}>
              <TextBold>Espiritismo</TextBold> é uma doutrina fundamentada na existência da alma, que sobrevive a morte do corpo físico, mantendo-se a sua individualidade, integridade e consciência.
            </TextNormal>
          </View>
          <View>
            <TextNormal style={[styles.text, styles.wrapLine]}>
              O Espiritismo baseia-se nos postulados passados por vários seres espirituais e codificados por Allan Kardec, através da comunicação mediúnica, com a participação dos médiuns, pessoas que desenvolveram a capacidade de comunicação entre seres do mundo físico, material e seres do mundo astral, espiritual.
            </TextNormal>
          </View>
          <View>
            <TextNormal style={[styles.text, styles.wrapLine]}>
              A abrangência do Espiritismo está na sua visão do homem integral e imortal e do propósito universal da evolução do ser.
            </TextNormal>
          </View>
          <View>
            <TextNormal style={[styles.text, styles.wrapLine]}>
              Define e estuda os seres espirituais e suas dimensões de vida.
            </TextNormal>
          </View>
          <View>
            <TextNormal style={styles.footer}>
              Resumo escrito por nós do aplicativo Espiritismo com referências do livro "O que é o Espiritismo" autor "Allan Kardec".
            </TextNormal>
            <TextNormal style={styles.footer}>
              O entendimento do Espiritismo é muito mais abrangente, para maior esclarecimento você precisa conhecer as outros obras de Kardec.
            </TextNormal>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
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
  wrapLine: {
    paddingBottom: 15,
  },
  footer: {
    fontSize: 15,
    textAlign: 'center'
  },
  title: {
    textAlign: 'center'
  }
});

export default Spiritism;
