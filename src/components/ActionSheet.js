import { connectActionSheet } from '@expo/react-native-action-sheet';
import { Feather } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

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
          <TouchableOpacity onPress={this._showActionSheet}>
            <Feather name="menu" size={30} />
          </TouchableOpacity>
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
    paddingRight: 10,
  },
});

export default connectActionSheet(ActionSheet);
