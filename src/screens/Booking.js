// This code is a legacy and will be modified for good practice.

import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { TextNormal } from '../components/StyledText';
import * as GoogleAnalytics from '../services/GoogleAnalytics';

class Booking extends React.Component {
  _isMounted = false;

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'LEITURA',
      headerTitleStyle: {
        fontWeight: '400',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
        fontSize: 18,
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#2196f3',
        elevation: 0,
        borderBottomWidth: 0,
      },
      headerLeft: (
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={{ paddingLeft: 10 }}>
            <Text onPress={() => navigation.openDrawer()}>
              <Ionicons name="md-menu" size={30} color="#fff" />
            </Text>
          </View>
        </View>
      ),
      headerRight: <View></View>,
    };
  };

  constructor(props) {
    super(props);
    GoogleAnalytics.pageHit('Booking');

    this.state = {
      progress: 0,
      indeterminate: true,
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.animate();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  animate() {
    let progress = 0;
    this.setState({ progress });
    progress =
      (this.props.question.resultBookingRead.length * 100) / this.props.question.result.length;
    if (this._isMounted) this.setState({ indeterminate: false, progress });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: '#2196f3',
            width: '100%',
            height: '100%',
            flex: 1,
            alignItems: 'center',
            paddingTop: 50,
          }}>
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
            {fill => (
              <Text
                style={{
                  fontSize: 30,
                  color: 'white',
                }}>
                {Math.floor(this.state.progress * Math.pow(10, 0)) / Math.pow(10, 0)}
                {'%'}
              </Text>
            )}
          </AnimatedCircularProgress>
          <TextNormal
            style={{
              fontSize: 22,
              color: 'white',
              paddingLeft: 30,
              paddingRight: 30,
              paddingTop: 50,
              textAlign: 'left',
            }}>
            Acompanhe o progresso da sua leitura, o modo leitura abrange o livro todo.
          </TextNormal>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.nextContainer]}
            onPress={() => {
              GoogleAnalytics.eventBookingQuestion();
              this.props.navigation.navigate('BookingQuestion', { booking: true });
            }}>
            <Text style={styles.nextText}>
              {this.props.question.indexBookingRead > 0 ? 'CONTINUAR' : 'INICIAR'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps({ question }) {
  return { question };
}

export default connect(mapStateToProps, null)(Booking);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  circles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progress: {
    margin: 10,
  },
  nextText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
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
