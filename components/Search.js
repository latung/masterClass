import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
// import Button from 'react-native-button';

export default class Search extends Component{
    constructor(props){
        super(props);
        // this.state = {
        //     // chieuCao: 0
        // }
        this.clickMe = this.clickMe.bind(this)
    }
    clickMe() {
        // this.setState({
        //     chieuCao: this.state.chieuCao + 100
        // });
        // console.log(123);
    }
    
    render(){
        return(
            <TouchableOpacity onPress={this.clickMe}>
                <View>
                    <Text>{this.props.hoten}</Text>
                    <Text>{this.state.chieuCao}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
// const styles = StyleSheet.create({

// })