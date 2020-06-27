import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { TextBold, TextNormal } from '../components/StyledText';
import * as GoogleAnalytics from '../services/GoogleAnalytics';
import { showLoading } from '../store/actions/GlobalAction';
import { connect } from 'react-redux';

class Kardec extends React.Component {
  state = {
    data: [
      {
        id: 1,
        title: 'Quem foi Kardec?',
        color: '#0984e3',
        subTitle: 'Um pouco mais sobre sua história',
        link: 'History'
      },
      {
        id: 2,
        title: 'O que é Espiritismo?',
        color: '#6c5ce7',
        subTitle: 'Espiritismo, religião, ciência, entenda... ',
        link: 'Spiritism',
      },
      {
        id: 3,
        title: 'Outras obras',
        color: '#e17055',
        subTitle: 'Conheça as obras literárias',
        link: 'Books',
      },
    ],
  };

  constructor(props) {
    super(props);
    GoogleAnalytics.pageHit('Kardec');
  }

  _clickEventListener = (item) => {
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
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                disabled={!item.link}
                onPress={() => {
                  if(!!item.loading) {
                    this.props.showLoading();
                  }
                  setTimeout(() => this._clickEventListener(item), 100);
                }}>
                <View style={[styles.card, styles.table, { backgroundColor: item.color }]}>
                  <View style={styles.column}>
                    <TextBold style={styles.title}>{item.title}</TextBold>
                  </View>
                  <View style={styles.column}>
                    <TextNormal style={styles.subTitle}>{item.subTitle}</TextNormal>
                  </View>
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
    backgroundColor: '#fff'
  },
  listContainer: {
    paddingVertical: 6,
  },
  card: {
    height: 80,
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 3,
    borderRadius: 10,
    paddingVertical: 17,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    color: '#FFFFFF',
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

export default connect(mapStateToProps, mapDispatchToProps)(Kardec);
