import React, { Component } from 'react';
import { AppRegistry, View, Button, StyleSheet } from 'react-native';

export default class CenterFlex extends Component{

    render(){
        return (
            <View style={styles.container}>
              {/* <Button onPress={()=>{}} title="login"/> */}
              <View style={{height: '80%',width: '100%' , backgroundColor:'red'}}>
                
              </View>
            </View>     
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
        flex: 4, 
        backgroundColor : 'skyblue'
      }
});