import React from 'react';
import { StyleSheet, View, } from 'react-native';
import Login from './src/components/Login/Login.js';
import Register from './src/components/Register/Register.js';
import { Icon } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Register></Register>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
