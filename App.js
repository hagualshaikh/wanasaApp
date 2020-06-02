import React from 'react';
import { SafeAreaProvider, initialWindowSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import Routes from './src/Routes';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});