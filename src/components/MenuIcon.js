import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
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
        <TouchableOpacity onPress={this._navigate}>
          <Feather name="home" size={30} style={iconStyle} />
        </TouchableOpacity>
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
