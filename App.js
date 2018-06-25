import React from 'react';
import { StyleSheet, View, } from 'react-native';
import Login from './src/components/Login/Login.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Login></Login>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5794ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
