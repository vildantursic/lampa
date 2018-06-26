import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

export default class Register extends Component {
    render() {
        return (
            <View style={styles.register}>
                <Text style={styles.header}>Register</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    register: {
        alignSelf: 'stretch',
    },
    header: {
    },
});
