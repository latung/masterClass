import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
// import Button from 'react-native-button';

export default class trangchu extends Component{
    render(){
        return (
            <View style={styles.container} >
                <Text style={styles.titel}>Sign in to get started</Text>
                <View style={{margin: 10, color: '#fff'}}>
                    <Text style={{margin: 10, color: '#fff'}}>Sign in to access your enrolled classes</Text>
                    <Text>and account information.</Text>
                </View>
                <View>
                    <Text>By creating an account, you agree to our</Text>
                    <Text>Terms of Service and Privacy Policy.</Text>
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
        backgroundColor: '#000',
        color: '#fff'
    },
    titel: {
        fontSize: 20,
        color: '#fff'
    },
    // welcome: {
    //     fontSize: 20,
    //     textAlign: 'center',
    //     margin: 10,
    // },
    // instructions: {
    //     textAlign: 'center',
    //     color: '#333333',
    //     marginBottom: 5,
    // },
});
