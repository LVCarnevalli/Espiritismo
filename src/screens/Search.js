import React from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadQuestions, updateQuestions } from '../store/actions/QuestionAction';
import SearchList, { HighlightableText } from '@unpourtous/react-native-search-list';
import { Ionicons } from '@expo/vector-icons';
import * as _ from 'lodash';
import * as GoogleAnalytics from '../services/GoogleAnalytics';

class Search extends React.Component {
  constructor(props) {
    super(props);
    GoogleAnalytics.pageHit('Search');

    let questions = props.question.result.sort(function(a, b) {
      return a.number - b.number;
    });
    let groupQuestions = _.groupBy(questions, 'category');

    this.state = {
      dataSource: Object.keys(groupQuestions).map(key => {
        return {
          searchStr: key,
          value: groupQuestions[key],
        };
      }),
      questions: questions,
    };
  }

  renderRow(item, sectionID, rowID, highlightRowFunc, isSearching) {
    return (
      <TouchableOpacity
        onPress={() => {
          GoogleAnalytics.eventSearchQuestion();
          let lastItemNumber = item.value[item.value.length - 1].number;
          let index = this.state.questions.findIndex(value => value.number == lastItemNumber);

          this.props.navigation.navigate('ReadQuestion', {
            questionBooking: item.value.concat(_.slice(this.state.questions, index + 1)),
          });
        }}>
        <View key={rowID} style={{ flex: 1, marginLeft: 20, height: 50, justifyContent: 'center' }}>
          <HighlightableText
            matcher={item.matcher}
            text={item.searchStr}
            textColor={'#000'}
            hightlightTextColor={'#0069c0'}
          />
        </View>
      </TouchableOpacity>
    );
  }

  renderEmpty() {
    return (
      <View style={styles.emptyDataSource}>
        <Text style={{ color: '#979797', fontSize: 18, paddingTop: 20 }}> No Content </Text>
      </View>
    );
  }

  renderEmptyResult(searchStr) {
    return (
      <View style={styles.emptySearchResult}>
        <Text style={{ color: '#979797', fontSize: 18, paddingTop: 20 }}>
          {' '}
          Não encontrado <Text style={{ color: '#171a23', fontSize: 18 }}>{searchStr}</Text>
        </Text>
        <Text style={{ color: '#979797', fontSize: 18, alignItems: 'center', paddingTop: 10 }}>
          Realize a busca novamente
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#F00" barStyle="light-content" />
        <View style={{ height: 8, backgroundColor: '#2196f3' }}></View>
        <SearchList
          data={this.state.dataSource}
          hideSectionList={true}
          renderRow={this.renderRow.bind(this)}
          renderEmptyResult={this.renderEmptyResult.bind(this)}
          renderBackButton={() => (
            <View style={{ paddingLeft: 10 }}>
              <Text onPress={() => this.props.navigation.openDrawer()}>
                <Ionicons name="md-menu" size={30} color="#fff" />
              </Text>
            </View>
          )}
          renderRightButton={() => <View style={{ paddingRight: 30 }}></View>}
          renderEmpty={this.renderEmpty.bind(this)}
          rowHeight={50}
          toolbarBackgroundColor={'#2196f3'}
          title="CAPÍTULOS"
          cancelTitle="Fechar"
          searchListBackgroundColor={'#2196f3'}
          searchBarToggleDuration={300}
          searchInputBackgroundColor={'#0069c0'}
          searchInputBackgroundColorActive={'#6ec6ff'}
          searchInputPlaceholderColor={'#FFF'}
          searchInputTextColor={'#FFF'}
          searchInputTextColorActive={'#000'}
          searchInputPlaceholder="Buscar"
          sectionIndexTextColor={'#6ec6ff'}
          searchBarBackgroundColor={'#2196f3'}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  emptyDataSource: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  emptySearchResult: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 50,
  },
});
