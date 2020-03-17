import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';

import { TextBold, TextLight, TextNormal } from '../components/StyledText';
import * as GoogleAnalytics from '../services/GoogleAnalytics';

class Prayer extends React.Component {

  state = {
    isModalVisible: false,
    modalItem: {
      name: null,
      description: null,
      text: null,
      observation: null,
    },
  };

  constructor(props) {
    super(props);
    GoogleAnalytics.pageHit('Prayer');
  }

  _showModal = item => {
    GoogleAnalytics.eventSelectPrayer(item.name);
    this.setState({ isModalVisible: !this.state.isModalVisible, modalItem: item });
  };

  _hideModal = () => {
    this.setState({ isModalVisible: false });
  };

  _renderItem = item => {
    return (
      <TouchableOpacity style={styles.button} onPress={() => this._showModal(item)}>
        <View style={styles.listItem}>
          <View style={styles.subListItem}>
            <TextBold style={styles.title}>{item.name}</TextBold>
            <TextNormal style={styles.description}>{item.description}</TextNormal>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          isVisible={this.state.isModalVisible}
          onSwipeComplete={this.close}
          style={styles.modalView}>
          <View style={styles.modalContent}>
            <Ionicons
              name="md-close"
              size={30}
              style={styles.closeModal}
              onPress={this._hideModal}
            />
            <View style={styles.header} />
            <ScrollView>
              <View style={styles.modalText}>
                <TextNormal style={styles.text}>
                  <TextBold>
                    {this.state.modalItem.name}
                    {'\n'}
                    {'\n'}
                  </TextBold>
                  {this.state.modalItem.text}
                  <TextLight style={styles.textFooter}>
                    {'\n'}
                    {'\n'}
                    {this.state.modalItem.observation}
                  </TextLight>
                </TextNormal>
              </View>
            </ScrollView>
          </View>
        </Modal>

        <FlatList
          contentContainerStyle={styles.list}
          data={this.props.prayer.result}
          renderItem={({ item }) => this._renderItem(item)}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginHorizontal: '20%',
    height: 0.5,
    backgroundColor: '#FFF',
  },
  closeModal: {
    color: '#FFF',
    textAlign: 'right',
    marginRight: 20,
    marginTop: 10,
  },
  modalContent: {
    height: '90%',
    backgroundColor: '#363537',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalView: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalText: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
  },
  textFooter: {
    fontSize: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#363537'
  },
  list: {
    paddingVertical: 6,
    paddingHorizontal: 6,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    color: '#fff',
    fontSize: 15,
  },
  description: {
    color: '#fff',
  },
  listItem: {
    margin: 3,
    padding: 10,
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#FFF',
  },
  subListItem: {
    alignItems: 'center',
    flex: 1,
  },
});

function mapStateToProps({ prayer }) {
  return { prayer };
}

export default connect(mapStateToProps, null)(Prayer);
