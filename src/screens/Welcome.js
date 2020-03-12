// This code is a legacy and will be modified for good practice.

import React from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { TextExtraBold, TextNormal } from '../components/StyledText';
import { bindActionCreators } from 'redux';
import { loadQuestions, updateQuestions } from '../store/actions/QuestionAction';
import Toast from 'react-native-easy-toast';
import * as GoogleAnalytics from '../services/GoogleAnalytics';

class Welcome extends React.Component {
  constructor() {
    super();
    GoogleAnalytics.pageHit('Welcome');
    this.state = {
      messageOffline: false,
    };
  }

  UNSAFE_componentWillMount() {
    let question = this.props.question;
    if (!question || !question.result || !question.result.length > 0) {
      this.props.loadQuestions();
      setTimeout(() => {
        if (this.props.offline) {
          this.setState({
            messageOffline: true,
          });
        }
      }, 3000);
    } else {
      this.props.updateQuestions();
    }
  }

  UNSAFE_componentWillReceiveProps(prevProps) {
    if (this.props.question.error && this.props.question.error !== prevProps.question.error) {
      this.refs.toast.show('Ops, ocorreu um problema. Tente novamente.', 2000, () => {});
    }
  }

  componentDidMount() {
    if (
      !this.props.offline &&
      !this.state.messageOffline &&
      !this.props.question.loading &&
      !this.props.question.error
    ) {
      this.props.navigation.navigate('Menu');
    }
  }

  _messageNextButton() {
    let message;
    if (this.props.offline && this.state.messageOffline) {
      message = 'SEM CONEXÃO';
    } else if (this.props.question.loading) {
      message = 'CARREGANDO';
    } else if (this.props.question.error) {
      message = 'TENTE NOVAMENTE';
    } else {
      message = 'CONTINUAR';
    }
    return message;
  }

  _handleNextPress = () => {
    if (this.props.question.error) {
      this.props.loadQuestions();
    } else {
      this.props.navigation.navigate('Menu');
    }
  };

  _background() {
    const hour = new Date().getHours();
    if (hour >= 0 && hour <= 6) {
      return require('../../assets/images/BgBlood.png');
    } else if (hour > 6 && hour <= 18) {
      return require('../../assets/images/BgSun.png');
    } else {
      return require('../../assets/images/BgMoon.png');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Toast
          ref="toast"
          style={{ backgroundColor: 'red' }}
          position="top"
          positionValue={50}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{ color: 'white' }}
        />
        <ImageBackground source={this._background()} style={styles.background}>
          <View style={styles.header} />
          <View style={styles.content}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>espiritismo</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              disabled={this.props.question.loading || this.props.offline}
              onPress={this._handleNextPress}
              style={[
                styles.nextContainer,
                { opacity: this.props.question.loading || this.props.offline ? 0.2 : 1 },
              ]}>
              <Text style={styles.nextText}>{this._messageNextButton()}</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

function mapStateToProps({ question, global }) {
  return { question, offline: global.offline };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      loadQuestions,
      updateQuestions,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  header: {
    height: '20%',
  },
  content: {
    flex: 1,
  },
  footer: {
    height: 70,
    width: '100%',
  },
  titleContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 50,
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: 'center',
    fontFamily: 'grotes-sans-regular',
  },
  messageContainer: {
    flex: 2,
  },
  messageText: {
    fontSize: 22,
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: 'left',
  },
  nextContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderColor: 'white',
  },
  nextText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
