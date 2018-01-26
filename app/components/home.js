import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';

import { getFeed, navigate } from '../actions';
import Item from './item';

const styles = StyleSheet.create({
  container: {
  },
});

class Home extends Component {
  static propTypes = {
    rssFeed: PropTypes.object,
    navigate: PropTypes.func.isRequired,
    getFeed: PropTypes.func.isRequired,
  }

  static defaultProps = {
    rssFeed: null,
  }

  static keyExtractor(item) {
    return item.guid;
  }

  componentDidMount() {
    this.props.getFeed();
  }

  getLoading = () => {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  goToItem(item) {
    this.props.navigate('Detail', item);
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.goToItem(item)}>
        <Item title={item.title} containerStyle={{ flex: 1, height: 150, padding: 10 }}>
          <Text>{item.description}</Text>
        </Item>
      </TouchableOpacity >
    );
  }

  renderHeader = () => {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 30 }}>Your Rss Feed</Text>
      </View>
    );
  }

  render() {
    if (!this.props.rssFeed) {
      return this.getLoading();
    }

    return (
      <FlatList
        ListHeaderComponent={this.renderHeader}
        data={Object.values(this.props.rssFeed.rss.channel.item)}
        keyExtractor={Home.keyExtractor}
        renderItem={this.renderItem}
        style={{ flex: 1 }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    rssFeed: state.rssFeed,
  });
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getFeed,
  navigate,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

