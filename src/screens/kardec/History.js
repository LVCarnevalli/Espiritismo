import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import * as GoogleAnalytics from '../../services/GoogleAnalytics';
import { TextBold, TextNormal } from '../../components/StyledText';

class History extends React.Component {

  constructor(props) {
    super(props);
    GoogleAnalytics.pageHit('KardecHistory');
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <View style={styles.avatarImage}>
              <Image source={require('../../../assets/images/Kardec.jpeg')}/>
            </View>
            <TextNormal style={[styles.text, styles.wrapLine]}>
              <TextBold>Hippolyte Léon Denizard Rivail</TextBold> era um professor cético, autor de livros pedagógicos na
              França do século XIX, até ver mesas girarem no ar e
              ditarem, ao som de pancadas, mensagens atribuídas ao além. Uma batida, letra A, duas
              batidas, letra B, e assim sucessivamente até se formar frases e textos inteiros,
              assinados por mortos ilustres ou anônimos.
            </TextNormal>
            <TextNormal style={[styles.text, styles.wrapLine]}>
              Fraude? Hipnose coletiva? Autossugestão?
              Energia manipulada pelos vivos... Ou pelos mortos? O que estaria por trás daqueles
              fenômenos testemunhados por multidões na Europa, e reverenciados por celebridades?
            </TextNormal>
            <TextNormal style={[styles.text]}>
              Foi o que o professor decidiu descobrir.
            </TextNormal>
            <TextNormal style={[styles.text, styles.wrapLine]}>
              Aos 53 anos, depois de pôr à prova o invisível, Rivail mudou de vida e de nome para dar
              voz aos espíritos. Tornou-se Allan Kardec, uma figura cada vez mais conhecida,
              admirada... E perseguida.
            </TextNormal>
            <TextNormal style={[styles.text, styles.wrapLine]}>
              O que transformou um cético em um divulgador e codificador de uma doutrina? O que o
              convenceu a acreditar que os mortos estavam vivos e se comunicavam através de médiuns? O
              que o fez enfrentar adversários ferrenhos, da Igreja e da imprensa, para levar ao maior
              número de leitores sua fé na sobrevivência do espírito?
            </TextNormal>
            <TextNormal style={[styles.text, styles.wrapLine]}>
              Allan Kardec, nome adotado por ele, veio de um comunicação com seres incorpóreos que
              diziam ser esse o nome do professor Denizard, numa existência passada entre os povos
              celtas. Sendo assim, o professor decidiu adotar o nome Allan Kardec.
            </TextNormal>
            <TextNormal style={[styles.text, styles.wrapLine]}>
              Quando Kardec começou a participar das sessões de mesas girantes, mesas que recebiam
              pancadas, o ceticismo característico de sua personalidade estava alinhado ao rigor
              racional e científico. Assim sendo, num primeiro momento, ele rejeitou tais fenômenos.
              Mas, por insistências de conhecidos, participou e verificou que havia algo muito mais
              importante do que o fenômeno em si, ou seja, havia uma comunicação estabelecida, havia
              uma mente, uma inteligência por trás daqueles movimentos, daquelas batidas.
            </TextNormal>
            <TextNormal style={[styles.text, styles.wrapLine]}>
              Nesse momento, a participação de Kardec foi de tentar uma comunicação racional e
              perguntas foram feitas para que ele chegasse a conclusões, utilizando-se de um método,
              pois, apesar de, naquela época, existir fenômenos reais, existia um grande número de
              charlatões que aproveitavam-se para enganar e ter benefícios, tanto de prestígio quanto
              financeiro.
            </TextNormal>
            <TextNormal style={[styles.text, styles.wrapLine]}>
              Era uma época onde a ciência, a filosofia, a sociologia, a antropologia desenvolviam-se
              buscando entender o homem, a vida, o universo e o método e pensamento científicos tinham
              suas bases na lógica, razão e metodologia, que pudessem garantir consistências à
              quaisquer fenômenos apresentados.
            </TextNormal>
            <TextNormal style={[styles.text, styles.wrapLine]}>
              Kardec aplicou o método baseando-se nessas premissas científicas, buscando através de
              perguntas profundas e importantes, encontrar respostas racionais, através de várias
              pessoas, em vários lugares, que intermediaram esses fenômenos, posteriormente, chamados
              por ele de médiuns.
            </TextNormal>
            <TextNormal style={[styles.text, styles.wrapLine]}>
              A conclusão foi que seres incorpóreos registravam ideias e conceitos lógicos e ficou bem
              claro e cristalino o fato de serem "seres humanos" que "viviam" numa dimensão
              existencial próxima da nossa, a "Dimensão Corpórea". Esses seres foram denominados por
              ele, através da codificação da Doutrina Espírita, como Espíritos. Espíritos que viveram
              no nosso mundo corpóreo e que continuavam suas vidas nessa outra dimensão existencial, a
              "Dimensão Espiritual".
            </TextNormal>
            <TextNormal style={[styles.text, styles.wrapLine]}>
              Desse estudo crítico e pormenorizado, surgiu a Doutrina Espírita e tudo mais que se
              sucedeu na vida desse grande homem chamado Allan Kardec.
            </TextNormal>
            <View>
              <TextNormal style={[styles.text, styles.title]}>
                Palavras de Kardec:
              </TextNormal>
              <TextBold style={[styles.text, styles.wrapLine, styles.title]}>
                Todo efeito tem uma causa, portanto, todo efeito inteligente tem uma causa inteligente!
              </TextBold>
            </View>
          </View>
          <View>
            <TextNormal style={styles.footer}>
              Resumo escrito por nós do aplicativo Espiritismo com referências do livro "Kardec - A Biografia" autor "Maior, Marcel Souto".
            </TextNormal>
            <TextNormal style={styles.footer}>
              Para maior entendimento você pode procurar o livro ou assistir o filme do Kardec que está disponível nas plataformas digitais como a Netflix.
            </TextNormal>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  avatarImage: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
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

export default History;
