import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class trangchu extends Component{
    
    render(){
        return (
            <View style={{backgroundColor: '#000', flex: 1}}>
                <View style={{paddingTop: 20, padding: 10}}>
                    <Text style={{ fontSize: 13,color: '#fff', fontWeight: 'bold'}}>Music & Entertainment</Text>
                    <Text style={{ fontSize: 9,color: '#aaa9a9', fontWeight: 'bold'}} >11 CLASSE</Text>
                    <View>
                        <Text></Text>
                        <View>
                            <Text style={{fontSize: 15, color: '#fff'}}>DEADMAU5</Text>
                            <Text style={{ fontSize: 9,color: '#aaa9a9', fontWeight: 'bold'}}>TEACHES ELECTRONIC MUSIC PRODUCTION</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
