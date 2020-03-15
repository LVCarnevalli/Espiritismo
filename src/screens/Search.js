import SearchList, { HighlightableText } from '@unpourtous/react-native-search-list';
import * as _ from 'lodash';
import React from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuIcon from '../components/MenuIcon';
import { TextNormal } from '../components/StyledText';
import * as GoogleAnalytics from '../services/GoogleAnalytics';
import { loadQuestions, updateQuestions } from '../store/actions/QuestionAction';

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

  _openQuestion = item => {
    GoogleAnalytics.eventSearchQuestion();
    let lastItemNumber = item.value[item.value.length - 1].number;
    let index = this.state.questions.findIndex(value => value.number == lastItemNumber);

    this.props.navigation.navigate('ReadQuestion', {
      questionBooking: item.value.concat(_.slice(this.state.questions, index + 1)),
    });
  };

  _renderRow = (item, sectionID, rowID, highlightRowFunc, isSearching) => {
    return (
      <TouchableOpacity onPress={() => this._openQuestion(item)}>
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
  };

  _renderEmpty = () => {
    return (
      <View style={styles.emptyDataSource}>
        <TextNormal style={{ color: '#979797', fontSize: 18, paddingTop: 20 }}>
          {' '}
          No Content{' '}
        </TextNormal>
      </View>
    );
  };

  _renderEmptyResult = searchStr => {
    return (
      <View style={styles.emptySearchResult}>
        <TextNormal style={{ color: '#979797', fontSize: 18, paddingTop: 20 }}>
          {' '}
          Não encontrado{' '}
          <TextNormal style={{ color: '#171a23', fontSize: 18 }}>{searchStr}</TextNormal>
        </TextNormal>
        <TextNormal
          style={{ color: '#979797', fontSize: 18, alignItems: 'center', paddingTop: 10 }}>
          Realize a busca novamente
        </TextNormal>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#F00" barStyle="light-content" />
        <SearchList
          data={this.state.dataSource}
          hideSectionList={true}
          renderRow={this._renderRow}
          renderEmptyResult={this._renderEmptyResult}
          renderBackButton={() => (
            <MenuIcon navigation={this.props.navigation} iconStyle={{ color: '#FFFFFF' }} />
          )}
          renderRightButton={() => <View style={{ paddingRight: 40 }}></View>}
          renderEmpty={this._renderEmpty}
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
