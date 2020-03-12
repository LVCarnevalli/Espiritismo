import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { connectActionSheet } from '@expo/react-native-action-sheet';

class ActionSheet extends React.PureComponent {
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
        textStyle: styles.textStyle,
        titleTextStyle: styles.titleTextStyle,
        messageTextStyle: styles.messageTextStyle,
        containerStyle: styles.containerStyle,
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
          <Text onPress={this._showActionSheet}>
            <Feather name="menu" size={30} />
          </Text>
        </View>
      </View>
    );
  }
}

export default connectActionSheet(ActionSheet);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  subContainer: {
    paddingRight: 10,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '500',
    color: 'blue',
  },
  titleTextStyle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '700',
    color: 'orange',
  },
  messageTextStyle: {
    fontSize: 12,
    color: 'purple',
    textAlign: 'right',
  },
  containerStyle: {
    backgroundColor: 'lightgrey',
  },
});
