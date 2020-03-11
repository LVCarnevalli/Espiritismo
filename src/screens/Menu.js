// Credits: https://www.bootdey.com/react-native-snippet/47/Menu-list-ui-example
// Colors: https://flatuicolors.com/palette/us

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: 'Kardec',
          color: '#0984e3',
          footer: 'Em breve',
          image: require('../../assets/images/IconEdit.png'),
        },
        {
          id: 2,
          title: 'Questões',
          color: '#00b894',
          subTitle: 'O livro dos Espíritos',
          footer: 'Leia sem compromisso',
          image: require('../../assets/images/IconCup.png'),
          link: 'Question',
        },
        {
          id: 3,
          title: 'Capítulos',
          color: '#e84393',
          subTitle: 'O livro dos Espíritos',
          footer: 'Busque o seu assunto',
          image: require('../../assets/images/IconDetective.png'),
          link: 'Search',
        },
        {
          id: 4,
          title: 'Leitura',
          color: '#e17055',
          subTitle: 'O livro dos Espíritos',
          footer: 'Leia o livro',
          image: require('../../assets/images/IconOpenBook.png'),
          link: 'Booking',
        },
        {
          id: 5,
          title: 'Preces',
          color: '#6c5ce7',
          footer: 'Momento de silêncio',
          image: require('../../assets/images/IconMonastery.png'),
        },
        {
          id: 6,
          title: 'Áudio Livros',
          color: '#636e72',
          footer: 'Em breve',
          image: require('../../assets/images/IconAudioWave.png'),
        },
        {
          id: 7,
          title: 'Sobre',
          color: '#00cec9',
          footer: 'Faça seu comentário',
          image: require('../../assets/images/IconNovel.png'),
          link: 'About',
        },
      ],
    };
  }

  clickEventListener(item) {
    this.props.navigation.navigate(item.link);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={[styles.card, { backgroundColor: item.color }]}
                disabled={!item.link}
                onPress={() => {
                  this.clickEventListener(item);
                }}>
                <View style={[styles.cardHeader, styles.table]}>
                  <View style={styles.column}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.subTitle}>{item.subTitle}</Text>
                  </View>
                </View>
                <Image style={styles.cardImage} source={item.image} />
                <View style={styles.cardFooter}>
                  <Text style={styles.subTitle}>{item.footer}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  table: {
    flex: 1,
    flexDirection: 'column',
  },
  column: {
    width: '100%',
  },
  container: {
    flex: 1,
  },
  listContainer: {
    alignItems: 'center',
    paddingVertical: 6,
  },
  card: {
    marginHorizontal: 3,
    marginVertical: 3,
    flexBasis: '47%',
    borderRadius: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 12.5,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 70,
    width: 70,
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    flex: 1,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 12,
    flex: 1,
    color: '#FFFFFF',
  },
  icon: {
    height: 20,
    width: 20,
  },
});

export default Menu;
