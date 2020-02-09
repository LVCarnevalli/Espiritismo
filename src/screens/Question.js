// This code is a legacy and will be modified for good practice.

import React from 'react';
import { ScrollView, View, StyleSheet, Image, Share, Text } from 'react-native';
import { FormatText } from '../components/FormatText';
import { TextLight, TextBold, TextNormal } from '../components/StyledText';
import Layout from '../constants/Layout';
import { connect } from 'react-redux';
import { updateNotFirstLaunch } from '../store/actions/GlobalAction';
import {
  readQuestions,
  readBookingQuestions,
  updateIndexBookingQuestions,
} from '../store/actions/QuestionAction';
import Swiper from 'react-native-swiper';
import _ from 'lodash';
import * as GoogleAnalytics from '../services/GoogleAnalytics';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

Array.prototype.flatMap = function(lambda) {
  return Array.prototype.concat.apply([], this.map(lambda));
};

class Question extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam('title'),
      headerTitleStyle: { fontWeight: '400', fontSize: 18 },
      headerRight: (
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={{ paddingRight: 10 }}>
            <Text onPress={() => navigation.getParam('shared')()}>
              <Ionicons name="md-share" size={30} color={Colors.iconShare} />
            </Text>
          </View>
        </View>
      ),
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

  constructor(props) {
    super(props);
    GoogleAnalytics.pageHit('Question');

    this.state = {
      items: [],
      firstLaunch: false,
      actualQuestion: '',
      questionBooking: this.props.navigation.getParam('questionBooking'),
      booking: this.props.navigation.getParam('booking'),
      index: 0,
    };
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    let newQuestionProps = newProps.navigation.getParam('questionBooking');
    let prevQuestionProps = this.props.navigation.getParam('questionBooking');
    if (newQuestionProps !== prevQuestionProps) {
      this.setState(
        {
          questionBooking: newQuestionProps,
        },
        () => {
          this.forceUpdate();
        }
      );
    }
  }

  UNSAFE_componentWillMount() {
    if (this.props.isFirstLaunch && !this.state.questionBooking) {
      this.setState({
        firstLaunch: true,
      });
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ shared: this.shareQuestion, title: 'O LIVRO DOS ESPÍRITOS' });

    let items;

    let questionBooking = this.state.questionBooking;
    if (questionBooking) {
      items = questionBooking;
      this.props.navigation.setParams({ title: items[0].category });
    } else if (this.state.booking) {
      items = this.props.question.result;

      items = items.sort(function(a, b) {
        return a.number - b.number;
      });
    } else {
      if (this.props.question.resultRead.length >= this.props.question.result.length - 1) {
        this.props.readQuestions([]);
        items = this.props.question.result;
      } else {
        items = _.filter(
          this.props.question.result,
          obj => !_.find(this.props.question.resultRead, objRead => objRead.number == obj.number)
        );
      }

      items = items.sort(function(a, b) {
        return a.number - b.number;
      });

      let itemsGroup = [];

      function group(value, index = 0, temp = []) {
        temp.push(value[index]);
        if (index < value.length - 1) {
          let number = value[index].number.toString().replace(/[a-z]/gi, '');
          if (
            value[index + 1].number
              .toString()
              .match(
                new RegExp(number + '[a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|x|z|y|w]$')
              ) != undefined
          ) {
            group(value, index + 1, temp);
          } else {
            itemsGroup.push(temp);
            group(value, index + 1, []);
          }
        } else {
          itemsGroup.push(temp);
        }
      }

      group(items);

      items = _.shuffle(itemsGroup).flatMap(function(group) {
        return group;
      });
    }

    this.setState({
      actualQuestion: items[0],
      items: items,
    });
  }

  formatMessage(message) {
    return message.replace(/\n/g, ' ').replace(/<[^>]*>/g, '');
  }

  shareQuestion = () => {
    GoogleAnalytics.eventShareQuestion();
    Share.share(
      {
        message: `Espiritismo - O Livro dos Espíritos\nQuestão ${
          this.state.actualQuestion.number
        }\n${this.state.actualQuestion.category}\nPergunta: ${
          this.state.actualQuestion.question
        }\nResposta: ${this.formatMessage(this.state.actualQuestion.answer)}`,
        title: 'O Livro dos Espíritos',
      },
      {
        dialogTitle: 'Compartilhar',
      }
    );
  };

  renderGesture() {
    if (this.state.firstLaunch) {
      return (
        <View style={styles.containerGesture}>
          <Image style={styles.gesture} source={require('../../assets/images/IconGesture.png')} />
        </View>
      );
    }
  }

  renderPage = (item, key) => {
    let questionViewsRandom = (
      <TextLight style={styles.infoText}>
        {this.props.question.resultRead.length + 1}/{this.props.question.result.length} questões
        visualizadas
      </TextLight>
    );
    return (
      <ScrollView key={'view' + key}>
        {this.renderGesture()}
        <View style={styles.questionContainer}>
          <TextBold style={styles.questionText}>{item.question}</TextBold>
        </View>
        <View style={styles.infoContainer}>
          <TextLight style={styles.infoText}>Questão {item.number}</TextLight>
          <TextLight style={styles.infoText}>{item.category}</TextLight>
          {this.state.questionBooking || this.state.booking ? null : questionViewsRandom}
        </View>
        <View style={styles.answerContainer}>
          <FormatText style={styles.answerText} value={item.answer} />
        </View>
        <View style={{ paddingTop: 30 }}>
          <View style={styles.obsContainer}>
            <TextLight style={styles.obsText}>
              As frases que estão logo após as perguntas é a resposta dos Espíritos, já o texto que
              segue em itálico são as considerações de Allan Kardec e as citações no final são notas
              do tradutor.
            </TextLight>
            <TextLight style={styles.obsText}>
              O aplicativo "Espiritismo" se baseia nas obras de Allan Kardec com a tradução e notas
              do J. Herculano Pires sem fins lucrativos. A utilização e leitura através do
              aplicativo não dispensa a leitura das obras de Allan Kardec.
            </TextLight>
          </View>
        </View>
      </ScrollView>
    );
  };

  render() {
    return (
      <Swiper
        ref="slider"
        style={styles.wrapper}
        loadMinimal={true}
        index={this.state.booking ? this.props.question.indexBookingRead : 0}
        loadMinimalSize={3}
        showsPagination={false}
        showsButtons={false}
        loop={false}
        onIndexChanged={index => {
          GoogleAnalytics.eventSwipeQuestion();

          this.setState({
            actualQuestion: this.state.items[index],
            index: index,
          });

          // capitulos
          if (this.state.questionBooking) {
            this.props.navigation.setParams({ title: this.state.items[index].category });
          }

          // leitura
          if (this.state.booking) {
            this.props.updateIndexBookingQuestions(index);
            if (index > 0) {
              const actualQuestion = this.state.items[index - 1];
              const existQuestion =
                this.props.question.resultBookingRead &&
                this.props.question.resultBookingRead.length > 0
                  ? _.filter(
                      this.props.question.resultBookingRead,
                      obj => obj.number == actualQuestion.number
                    )[0]
                  : null;
              if (!existQuestion) {
                this.props.readBookingQuestions(
                  this.props.question.resultBookingRead.concat(actualQuestion)
                );
              }
            }
          }

          // estudo aleatorio
          if (index > 0 && !this.state.questionBooking && !this.state.booking) {
            if (this.props.isFirstLaunch) {
              this.setState({
                firstLaunch: false,
              });

              this.props.updateNotFirstLaunch();
            }

            const actualQuestion = this.state.items[index - 1];
            const existQuestion =
              this.props.question.resultRead && this.props.question.resultRead.length > 0
                ? _.filter(
                    this.props.question.resultRead,
                    obj => obj.number == actualQuestion.number
                  )[0]
                : null;
            if (!existQuestion) {
              this.props.readQuestions(this.props.question.resultRead.concat(actualQuestion));
            }
          }
        }}>
        {this.state.items.map((item, key) => this.renderPage(item, key))}
      </Swiper>
    );
  }
}

function mapStateToProps({ question, global }) {
  return { question, isFirstLaunch: global.firstLaunch };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNotFirstLaunch: () => updateNotFirstLaunch(dispatch),
    readQuestions: question => readQuestions(dispatch, question),
    readBookingQuestions: question => readBookingQuestions(dispatch, question),
    updateIndexBookingQuestions: index => updateIndexBookingQuestions(dispatch, index),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);

const styles = StyleSheet.create({
  background: {
    width: '100%',
    opacity: 0.8,
  },
  questionContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 10,
  },
  questionText: {
    fontSize: 19,
    color: 'black',
    textTransform: 'uppercase',
  },
  infoContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: 'black',
  },
  answerContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  answerText: {
    fontSize: 20,
    color: 'black',
  },
  backgroundImage: {
    width: Layout.window.width,
    height: Layout.window.height,
    backgroundColor: 'white',
  },
  spinnerTextStyle: {
    color: 'black',
  },
  containerGesture: {
    top: 100,
    zIndex: 100,
  },
  gesture: {
    width: 150,
    height: 150,
    position: 'absolute',
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
  },
  obsContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderColor: 'silver',
  },
  obsText: {
    fontSize: 16,
    paddingBottom: 30,
  },
});
