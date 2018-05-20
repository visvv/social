/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Screen from './components/Screen'
import FlexDimensions from './components/FlexDimensions'
import CenterFlex from './components/CenterFlex'
import {StackNavigator} from 'react-navigation'
import MainScreen from './components/MainScreen'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = StackNavigator({
     Main : {
       screen : MainScreen
     }
})

