import React, { Component } from 'react';
import { AppRegistry, View, Button, StyleSheet, Text} from 'react-native';
import {Icon} from 'native-base'
import {TabNavigator} from 'react-navigation'
import HomeScreen from './HomeScreen'


export default class MainScreen extends Component{
   static navigationOptions  = { 
      headerLeft : <Icon name="ios-camera-outline" style={{paddingLeft:10}}/>,
      title : 'Instagram',
      headerRight : <Icon name="ios-send-outline" style={{paddingRight:10}}/>
   }; 
    render(){
        return (<AppTabNavigator/>);
    }
}

const AppTabNavigator = TabNavigator({
    HomeTab:{
        screen : HomeScreen
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
});
