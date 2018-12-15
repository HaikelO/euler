/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from './app/reducers/index';
import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <AppStackNavigator />
      </Provider>
    );
  }
}
const AppStackNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen }
});
