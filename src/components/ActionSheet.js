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

  _showActionSheet = () => {
    const { options, onSelection } = this.props;
    this.props.showActionSheetWithOptions(
      {
        options: [...options, 'Cancelar'],
        cancelButtonIndex: options.length,
        showSeparators: true,
      },
      buttonIndex => {
        onSelection(buttonIndex);
      }
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
