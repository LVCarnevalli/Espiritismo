import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { connect } from 'react-redux';

import { TextBold, TextNormal } from '../components/StyledText';
import * as GoogleAnalytics from '../services/GoogleAnalytics';

class Booking extends React.Component {
  _isMounted = false;

  state = {
    progress: 0,
    indeterminate: true,
  };

  constructor(props) {
    super(props);
    GoogleAnalytics.pageHit('Booking');
  }

  componentDidMount() {
    this._isMounted = true;
    this._animate();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  _animate() {
    this.setState({ progress: 0 });
    if (this._isMounted) {
      this.setState({
        indeterminate: false,
        progress:
          (this.props.question.resultBookingRead.length * 100) / this.props.question.result.length,
      });
    }
  }

  _next = () => {
    GoogleAnalytics.eventBookingQuestion();
    this.props.navigation.navigate('BookingQuestion', { booking: true });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <AnimatedCircularProgress
            style={styles.progress}
            size={200}
            width={10}
            fill={this.state.progress}
            tintColor="#ffffff"
            duration={1000}
            ref="circularProgress"
            rotation={0}
            backgroundColor="#3d5875">
            {() => (
              <TextNormal style={styles.progressText}>
                {Math.floor(this.state.progress * Math.pow(10, 0)) / Math.pow(10, 0)}
                {'%'}
              </TextNormal>
            )}
          </AnimatedCircularProgress>
          <TextNormal style={styles.text}>
            Acompanhe o progresso da sua leitura, o modo leitura abrange todas as questões do livro.
          </TextNormal>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.nextContainer} onPress={this._next}>
            <TextBold style={styles.nextText}>
              {this.props.question.indexBookingRead > 0 ? 'CONTINUAR' : 'INICIAR'}
            </TextBold>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  subContainer: {
    backgroundColor: '#2196f3',
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  progress: {
    margin: 10,
  },
  progressText: {
    fontSize: 30,
    color: 'white',
  },
  nextText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    fontSize: 20,
    color: 'white',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 50,
    textAlign: 'left',
  },
  footer: {
    height: 70,
    width: '100%',
    backgroundColor: '#2196f3',
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
});

function mapStateToProps({ question }) {
  return { question };
}

export default connect(mapStateToProps, null)(Booking);
