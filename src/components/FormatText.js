import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TextBold, TextItalic, TextNormal } from './StyledText';

require('../utilities/Html2Json');

Array.prototype.flatMap = function(lambda) {
  return Array.prototype.concat.apply([], this.map(lambda));
};

class FormatText extends React.Component {
  static defaultProps = {
    style: null,
    value: null,
  };

  _format = json => {
    if (!json.child) return;
    return json.child.flatMap((value, key) => {
      if (value.node === 'element') {
        if (value.tag === 'bold') {
          return (
            <TextBold key={key} style={this.props.style}>
              {this._format(value)}
            </TextBold>
          );
        } else if (value.tag === 'italic') {
          return (
            <TextItalic key={key} style={this.props.style}>
              {this._format(value)}
            </TextItalic>
          );
        } else if (value.tag === 'citation') {
          return (
            <View key={key} style={styles.containerCitation}>
              <View>
                <Ionicons name="quote" size={70} color={'#D3D3D3'} />
              </View>
              <View style={styles.containerTextCitation}>
                <Text style={[this.props.style, styles.textCitation]}>{this._format(value)}</Text>
              </View>
            </View>
          );
        } else if (value.tag === 'text') {
          return (
            <TextNormal key={key} style={this.props.style}>
              {this._format(value)}
            </TextNormal>
          );
        }
      } else {
        return (
          <Text key={key} style={[this.props.style, { fontFamily: null }]}>
            {value.text}
          </Text>
        );
      }
    });
  };

  render() {
    return this._format(html2json(this.props.value));
  }
}

const styles = StyleSheet.create({
  textCitation: {
    paddingLeft: 20,
  },
  containerCitation: {
    flexDirection: 'row',
  },
  containerTextCitation: {
    flex: 1,
  },
});

export default FormatText;
