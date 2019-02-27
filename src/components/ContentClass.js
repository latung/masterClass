
import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import { getFoodsFromServer } from '../../networking/Server.js'

class ScrollViewExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            names: []
        }
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        getFoodsFromServer().then((foods) => {
            this.setState({ names: foods });
            console.log(this.state.names);
        }).catch((error) => {
            console.log(error);
        });
    }
    // state = {
    //     names: this.state.cloneMovies
    // }
    render() {
        return (
            <View>
                <ScrollView>
                    {
                        this.state.names.map((item, index) => (
                            <View>
                                <Text></Text>
                                <View>
                                    <Text style={{ fontSize: 15, color: '#fff' }}>{item.list.Name}</Text>
                                    <Text style={{ fontSize: 9, color: '#aaa9a9', fontWeight: 'bold' }}>{item.list.Content}</Text>
                                    <Text style={{ fontSize: 15, color: '#fff' }}>{item.list.Name}</Text>
                                    <Text style={{ fontSize: 9, color: '#aaa9a9', fontWeight: 'bold' }}>{item.list.Content}</Text>
                                    <Text style={{ fontSize: 15, color: '#fff' }}>{item.list.Name}</Text>
                                    <Text style={{ fontSize: 9, color: '#aaa9a9', fontWeight: 'bold' }}>{item.list.Content}</Text>
                                    <Text style={{ fontSize: 15, color: '#fff' }}>{item.list.Name}</Text>
                                    <Text style={{ fontSize: 9, color: '#aaa9a9', fontWeight: 'bold' }}>{item.list.Content}</Text>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}
export default ScrollViewExample

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
})