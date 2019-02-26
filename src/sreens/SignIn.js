import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
// import LogIn from './LogIn';
// import { Button } from 'react-native';
import { Icon } from 'react-native-elements'

export default class trangchu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headSignIn}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon
                            name='video-call'
                            color='#fff' />
                        <Text style={{color: '#fff'}}> Your Profile</Text>
                    </View>
                    <Icon
                        name='settings'
                        color='#fff' />
                </View>
                
                <View style={styles.bodySignIn}>
                    <Text style={styles.titel}>Sign in to get started</Text>
                    <Text style={styles.headline}>Sign in to access your enrolled classes and account information.</Text>
                    <Text style={styles.headline}>By creating an account, you agree to our Terms of Service and Privacy Policy.</Text>
                    <TouchableOpacity style={styles.buttonLogInFB}>
                        <Text style={styles.TextButtonLogIn}> CONTINUE WITH FACEBOOK </Text>
                    </TouchableOpacity>

                    <Text style={{ color: '#717171', padding: 10, fontSize: 11, fontWeight: 'bold' }}>OR</Text>

                    <TouchableOpacity style={styles.buttonLogInGG}>
                        <Text style={styles.TextButtonLogIn}> CREATE AN ACCOUNT </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_SignIn') }}>
                        <Text style={{ color: '#fff', marginTop: 15, fontSize: 10, fontWeight: 'bold' }}>LOG IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    
    container: {
        // , 'tahoma', 'verdana', 'arial', 'sans-serif'
        // fontFamily: 'sans-serif',
        // fontStyle: ('normal', 'italic'),
        flex: 1,
        // flexDirection: 'column',
        color: '#fff'
    },
    headSignIn:{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#505050',
        justifyContent: 'space-between',
        padding: 10,
        // alignItems: 'center',
    },
    bodySignIn:{
        flex: 1,
        flexDirection: 'column',
        padding: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    titel: {
        marginBottom: 7,
        fontWeight: 'bold',
        fontSize: 17,
        color: '#fff'
    },
    headline: {
        textAlign: 'center',
        fontSize: 10.5,
        marginTop: 0,
        color: '#72767c',
        marginBottom: 15,
    },
    buttonLogInFB: {
        width: '100%',
        borderRadius: 3,
        alignItems: 'center',
        backgroundColor: '#3b5998',
        padding: 10
    },
    TextButtonLogIn: {
        color: '#fff',
        fontSize: 9,
        fontWeight: 'bold'
    },
    buttonLogInGG: {
        width: '100%',
        borderRadius: 3,
        alignItems: 'center',
        backgroundColor: '#c83332',
        padding: 10

    }
});
