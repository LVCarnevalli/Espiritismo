import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';
import { TextBold, TextItalic, TextLight, TextNormal } from '../components/StyledText';

class Prayer extends React.Component {
  state = {
    data: [
      {
        name: 'CÁRITAS',
        description: 'Data Entry Clerk',
        text:
          'Deus nosso Pai, que Sois todo poder e bondade, dai força àqueles que passam pela provação, dai luz àqueles que procuram a verdade, e ponde no coração do homem a compaixão e a caridade.' +
          '\n\n' +
          'Deus, dai ao viajante a estrela Guia, ao aflito a consolação, ao doente o repouso.' +
          '\n\n' +
          'Pai, dai ao culpado o arrependimento, ao espírito, a verdade, à criança o guia, ao órfão, o pai.' +
          'Que a vossa bondade se estenda sobre tudo que criaste.' +
          '\n\n' +
          'Piedade, Senhor, para aqueles que não Vos conhecem, e esperança para aqueles que sofrem.' +
          'Que a Vossa bondade permita aos espíritos consoladores, derramarem por toda à parte a paz, a esperança e a fé.' +
          '\n\n' +
          'Deus, um raio, uma faísca do Vosso divino amor pode abrasar a Terra, deixai-nos beber na fonte dessa bondade fecunda e infinita, e todas as lágrimas secarão, todas as dores acalmar-se-ão.' +
          'Um só coração, um só pensamento subirá até Vós, como um grito de reconhecimento e de amor.' +
          'Como Moisés sobre a montanha, nós Vos esperamos com os braços abertos.' +
          '\n\n' +
          'Oh! bondade, Oh! Poder, Oh! beleza, Oh! perfeição, e queremos de alguma forma alcançar a Vossa misericórdia.' +
          '\n\n' +
          'Deus,' +
          '\n' +
          'Dai-nos a força no progresso de subir até Vós, dai-nos a caridade pura, dai-nos a fé e a razão, dai-nos a simplicidade que fará de nossas almas o espelho onde se refletirá a vossa imagem.',
        observation: 'Mme. W. Krill ditado por Cáritas.',
      },
      {
        name: 'GRATIDÃO',
        description: 'Sales Manager',
      },
      {
        name: 'MADRE TERESA',
        description: 'Sales Manager',
      },
      {
        name: 'PAI NOSSO',
        description: 'José Silvério Hora',
      },
      {
        name: 'Jonathan Nu\u00f1ez',
        description: 'Clerical',
      },
      {
        name: 'Sasha Ho',
        description: 'Administrative Assistant',
      },
      {
        name: 'Abdullah Hadley',
        description: 'Marketing',
      },
      {
        name: 'Thomas Stock',
        description: 'Product Designer',
      },
      {
        name: 'Veeti Seppanen',
        description: 'Product Designer',
      },
      {
        name: 'Bonnie Riley',
        description: 'Marketing',
      },
    ],
    isModalVisible: false,
    modalItem: {
      name: null,
      description: null,
      text: null,
      observation: null,
    },
  };

  _showModal = item => {
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
            <View style={styles.header}/>
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
          data={this.state.data}
          renderItem={({ item }) => this._renderItem(item)}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}

export default Prayer;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: '20%',
    height: 0.5,
    backgroundColor: '#FFF'
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
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    color: '#fff',
  },
  listItem: {
    margin: 3,
    padding: 10,
    backgroundColor: '#363537',
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
