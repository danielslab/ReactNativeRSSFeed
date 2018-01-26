import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import InVisionNavigation from './components';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <InVisionNavigation />
      </Provider>
    );
  }
}
