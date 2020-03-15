import { Feather } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

class MenuIcon extends React.Component {
  static defaultProps = {
    navigation: null,
    iconStyle: null,
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

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
  },
});

export default MenuIcon;
