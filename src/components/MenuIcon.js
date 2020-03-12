import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

class MenuIcon extends React.PureComponent {
  static defaultProps = {
    navigation: null,
  };

  _navigate = () => {
    this.props.navigation.navigate('Menu');
  };

  render() {
    const { iconStyle } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          <Feather name="home" size={30} onPress={this._navigate} style={iconStyle} />
        </Text>
      </View>
    );
  }
}

export default MenuIcon;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
  },
});
