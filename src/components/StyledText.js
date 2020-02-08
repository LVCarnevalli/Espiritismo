import React from 'react';
import { Text } from 'react-native';

export class TextNormal extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'open-sans-regular' }]} />;
  }
}

export class TextBold extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'open-sans-bold' }]} />;
  }
}

export class TextExtraBold extends React.Component {
  render() {
    return (
      <Text {...this.props} style={[this.props.style, { fontFamily: 'open-sans-extra-bold' }]} />
    );
  }
}

export class TextSemiBold extends React.Component {
  render() {
    return (
      <Text {...this.props} style={[this.props.style, { fontFamily: 'open-sans-semi-bold' }]} />
    );
  }
}

export class TextItalic extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'open-sans-italic' }]} />;
  }
}

export class TextLight extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'open-sans-light' }]} />;
  }
}
