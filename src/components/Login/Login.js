import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                           source={require('../../images/walter-logo.png')}/>
                    <Text style={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7fb8ff',
        padding: 20,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        marginTop: 10,
        color: '#ffffff',
        width: 200,
        textAlign: 'center',
        opacity: 0.9,
    },
    buttonContainer: {
        height: 60,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#ffffff',
        borderRadius: 4,
        marginBottom: 20,
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: '700',
    },
    description:{
        textAlign: 'left',
        color: '#ffffff',
        paddingVertical: 10,
}
});
