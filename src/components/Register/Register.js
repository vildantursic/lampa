import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default class Register extends Component {
    render() {
        return (
            <View style={styles.register}>
                <Text style={styles.header}>Register</Text>
                <TextInput style={styles.textInput} placeholder="Name" underlineColorAndroid={'transparent'}/>
                <TextInput style={styles.textInput} placeholder="Email" underlineColorAndroid={'transparent'}/>
                <TextInput style={styles.textInput} placeholder="Password" underlineColorAndroid={'transparent'}/>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    register: {
        padding: 20,
        alignSelf: 'stretch',
        backgroundColor: '#ff2f2e'
    },
    header: {
        textAlignVertical: 'top',
        fontWeight: '700',
        fontSize: 18,
        color: '#ffffff',
    },
    textInput: {
        alignSelf: 'stretch',
        height: 50,
        color: '#ffffff',
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
    },
    buttonContainer: {
        height: 60,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#ffffff',
        borderRadius: 4,
        marginBottom: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '700',
    },
});
