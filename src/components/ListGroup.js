import React, { Component } from 'react';
import { Text, ListView, View, StyleSheet, ScrollView, Image } from 'react-native';
import { getFoodsFromServer } from '../../networking/Server.js'

class ScrollViewExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            names: [],
            content: [],
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => true
            }),
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
                {
                    this.state.names.map((item, index) => (
                        <View style={{ backgroundColor: '#000' }}>
                            <View style={{ paddingBottom: 0, padding: 10, paddingTop: 15 }}>
                                <Text style={{ fontSize: 15, color: '#fff', fontWeight: 'bold' }}>{item.titel}</Text>
                                <Text style={{ fontSize: 11, color: '#aaa9a9', fontWeight: 'bold' }} >{item.class}</Text>
                                {
                                    item.list.map((sub, index) => (
                                        <View style={{flexDirection: 'row', paddingTop: 5, paddingBottom: 5}}>
                                            <Image
                                                style={{ width: 50, height: 80 }}
                                                source={{ uri: sub.url }}
                                            />
                                            <View style={{paddingLeft: 8}}>
                                                <Text style={{ fontSize: 17, color: '#fff', fontWeight: 'bold' }}>{sub.Name}</Text>
                                                <Text style={{ fontSize: 11, color: '#aaa9a9', fontWeight: 'bold' }}>{sub.Content}</Text>
                                            </View>
                                        </View>
                                    ))
                                }
                            </View>
                        </View>
                    ))
                }
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