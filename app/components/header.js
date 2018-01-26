import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';

const height = 50;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height,
    flexDirection: 'row',
    alignItems: 'center',
  },
  chevronContainer: {
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 6,
    alignItems: 'center',
  },
  title: {
    fontSize: height - 24,
    color: 'purple',
  },
});
export default class Header extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string,
  }

  static defaultProps = {
    title: null,
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <View
          style={styles.chevronContainer}
        >
          <TouchableOpacity onPress={this.props.onPress}>
            <Text style={{ fontSize: 40, color: 'grey', paddingLeft: 10 }}>&lt;</Text>
          </TouchableOpacity>
        </View>
        <View
          style={styles.titleContainer}
        >
          <Text style={styles.title}>
            {this.props.title}
          </Text>
        </View>
      </View>
    );
  }
}
