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
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5794ff',
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

    },
    buttonText: {

    }
});
