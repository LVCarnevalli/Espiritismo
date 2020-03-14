// This code is a legacy and will be modified for good practice.

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextBold, TextItalic, TextNormal } from './StyledText';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

require('../utilities/Html2Json');

Array.prototype.flatMap = function(lambda) {
  return Array.prototype.concat.apply([], this.map(lambda));
};

export class FormatText extends React.Component {
  format = json => {
    if (!json.child) return;
    return json.child.flatMap((value, key) => {
      if (value.node === 'element') {
        if (value.tag === 'bold') {
          return (
            <TextBold key={key} style={this.props.style}>
              {this.format(value)}
            </TextBold>
          );
        } else if (value.tag === 'italic') {
          return (
            <TextItalic key={key} style={this.props.style}>
              {this.format(value)}
            </TextItalic>
          );
        } else if (value.tag === 'citation') {
          return (
            <View key={key} style={styles.containerCitation}>
              <View>
                <Ionicons name="md-quote" size={70} color={Colors.quoteText} />
              </View>
              <View style={styles.containerTextCitation}>
                <TextNormal style={[this.props.style, styles.textCitation]}>
                  {this.format(value)}
                </TextNormal>
              </View>
            </View>
          );
        } else if (value.tag === 'text') {
          return (
            <TextNormal key={key} style={this.props.style}>
              {this.format(value)}
            </TextNormal>
          );
        }
      } else {
        return (
          <TextNormal key={key} style={this.props.style}>
            {value.text}
          </TextNormal>
        );
      }
    });
  };

  render() {
    return this.format(html2json(this.props.value));
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
