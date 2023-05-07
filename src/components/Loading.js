import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';

import { hideLoading } from '../store/actions/GlobalAction';

class Loading extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.hideLoading();
  }

  render() {
    return (
      <Spinner
        visible={this.props.loading}
        customIndicator={
          <Image
            source={require('../../assets/images/Loading.gif')}
            style={{ width: 100, height: 100 }}
          />
        }
      />
    );
  }
}

function mapStateToProps({ global }) {
  return { loading: global.loading };
}

function mapDispatchToProps(dispatch) {
  return {
    hideLoading: () => hideLoading(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
