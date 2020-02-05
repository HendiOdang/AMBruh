import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {/*  */}
        <View style={{flex: 1, backgroundColor: 'blue'}}></View>
        <View style={{height: 54, backgroundColor: 'yellow', flexDirection: "row"}}></View>
        <View style= {{backgroundColor: 'red', flex: 1, alignItems: 'center'}}></View>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  
});


