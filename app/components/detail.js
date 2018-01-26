

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  WebView,
} from 'react-native';

export default class Detail extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render() {
    return (
      <WebView
        source={{ uri: this.props.navigation.state.params.link }}
        style={{ flex: 1 }}
      />
    );
  }
}
