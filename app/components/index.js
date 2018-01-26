import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StackNavigator,
  addNavigationHelpers,
} from 'react-navigation';

import Home from './home';
import Detail from './detail';
import Header from './header';

import { goBack } from '../actions';

export const NavigationInVisionTest = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Detail: {
      screen: Detail,
      navigationOptions: ({ navigation }) => ({
        header: <Header
          onPress={() => navigation.dispatch(goBack())}
          title="Selected Item"
        />,
      }),
    },
  },
  {

  },
);

class InVisionNavigation extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  }

  render() {
    return (
      <NavigationInVisionTest
        navigation={
          addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
          })
        }
      />
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    nav: state.nav,
  });
};

const mapDispatchToProps = dispatch => bindActionCreators({
  dispatch,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InVisionNavigation);

