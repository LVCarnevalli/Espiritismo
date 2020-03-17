import { connectActionSheet } from '@expo/react-native-action-sheet';
import { Feather } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { HeaderBackButton } from 'react-navigation';

import Layout from '../constants/Layout';

class ActionSheet extends React.Component {
  static defaultProps = {
    onSelection: null,
    options: [],
  };

  _execute = (buttonIndex) => {
    const { onSelection } = this.props;
    setTimeout(() => {
      onSelection(buttonIndex);
    }, 350)
  }

  _showActionSheet = () => {
    const { options } = this.props;
    this.props.showActionSheetWithOptions(
      {
        options: [...options, 'Cancelar'],
        cancelButtonIndex: options.length,
        showSeparators: true,
      },
      this._execute
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <HeaderBackButton
            onPress={this._showActionSheet}
            backImage={<Feather name="menu" size={30} />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  subContainer: {
    paddingRight: Layout.headerPadding,
  },
});

export default connectActionSheet(ActionSheet);
