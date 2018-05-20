import React, { Component } from 'react';
import { AppRegistry, View, Button, StyleSheet } from 'react-native';

export default class FlexDimensions extends Component{

    render(){
        return (
            <View style={{flex: 1}}>
            <View style={{flex: 0.5, backgroundColor : 'powderblue'}} ></View>
            <View style={styles.container}>
              <Button onPress={()=>{}} title="login"/>
            </View>
            <View style={{flex: 0.5, backgroundColor : 'steelblue'}} ></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flex: 4, 
        backgroundColor : 'skyblue'
      }
});