// Credits: https://www.bootdey.com/react-native-snippet/47/Menu-list-ui-example
// Colors: https://flatuicolors.com/palette/us

import React from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { TextBold, TextNormal } from '../components/StyledText';
import * as GoogleAnalytics from '../services/GoogleAnalytics';
import { showLoading } from '../store/actions/GlobalAction';
import { Button } from 'react-native-elements/dist/buttons/Button';

class Menu extends React.Component {
  state = {
    data: [
      {
        id: 1,
        title: 'Kardec',
        color: '#0984e3',
        footer: 'O codificador',
        image: require('../../assets/images/IconLightbulb.png'),
        link: 'Kardec',
      },
      {
        id: 2,
        title: 'Questões',
        color: '#00b894',
        subTitle: 'O livro dos Espíritos',
        footer: 'Leia sem compromisso',
        image: require('../../assets/images/IconQuestion.png'),
        link: 'Question',
        loading: true,
      },
      {
        id: 3,
        title: 'Capítulos',
        color: '#e84393',
        subTitle: 'O livro dos Espíritos',
        footer: 'Busque por capítulo',
        image: require('../../assets/images/IconSearch.png'),
        link: 'Search',
      },
      {
        id: 4,
        title: 'Leitura',
        color: '#e17055',
        subTitle: 'O livro dos Espíritos',
        footer: 'Leia o livro',
        image: require('../../assets/images/IconRead.png'),
        link: 'Booking',
      },
      {
        id: 5,
        title: 'Preces',
        color: '#6c5ce7',
        footer: 'Momento de silêncio',
        image: require('../../assets/images/IconSave.png'),
        link: 'Prayer',
      },
      {
        id: 6,
        title: 'Sobre',
        color: '#636e72',
        footer: 'Faça seu comentário',
        image: require('../../assets/images/IconLove.png'),
        link: 'About',
      },
    ],
  };

  constructor(props) {
    super(props);
    GoogleAnalytics.pageHit('Warning');
  }

  _clickEventListener = item => {
    this.props.navigation.navigate(item.link);
  };

  _clickWarning = () => {
    this.props.navigation.navigate("Warning");
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Aplicativo novo, clique aqui!" onPress={this._clickWarning} style={{
          justifyContent: 'center',
          backgroundColor: '#6638f0',
        }} />
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={[styles.card, { backgroundColor: item.color }]}
                disabled={!item.link}
                onPress={() => {
                  if (!!item.loading) {
                    this.props.showLoading();
                  }
                  setTimeout(() => this._clickEventListener(item), 100);
                }}>
                <View style={[styles.cardHeader, styles.table]}>
                  <View style={styles.column}>
                    <TextBold style={styles.title}>{item.title}</TextBold>
                  </View>
                  <View style={styles.column}>
                    <TextNormal style={styles.subTitle}>{item.subTitle}</TextNormal>
                  </View>
                </View>
                <Image style={styles.cardImage} source={item.image} />
                <View style={styles.cardFooter}>
                  <TextNormal style={styles.subTitle}>{item.footer}</TextNormal>
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

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    showLoading: () => showLoading(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
