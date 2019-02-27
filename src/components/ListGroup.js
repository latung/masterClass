// import React, { Component } from 'react';
// import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
// import { getFoodsFromServer } from '../../networking/Server.js' ;

// export default class trangchu extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoading: true,
//             cloneMovies: []
//         }
//     }
//     componentDidMount() {
//         this.refreshDataFromServer();
//     }
//     refreshDataFromServer = () => {
//         getFoodsFromServer().then((foods) => {
//             this.setState({ cloneMovies: foods });
//             console.log(this.state.cloneMovies);
//         }).catch((error) => {
//             console.log(error);
//         });
//     }
//     render(){
//         return (
// <View style={{backgroundColor: 'red'}}>
//     <View style={{paddingTop: 20, padding: 10}}>
//         <Text style={{ fontSize: 13,color: '#fff', fontWeight: 'bold'}}>{this.state.cloneMovies.titel}</Text>
//         <Text style={{ fontSize: 9,color: '#aaa9a9', fontWeight: 'bold'}} >11 CLASSE</Text>
//         <View>
//             <Text></Text>
//             <View>
//                 <Text style={{fontSize: 15, color: '#fff'}}>DEADMAU5</Text>
//                 <Text style={{ fontSize: 9,color: '#aaa9a9', fontWeight: 'bold'}}>TEACHES ELECTRONIC MUSIC PRODUCTION</Text>
//             </View>
//         </View>
//     </View>
// </View>
//         );
//     }
// }

import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import { getFoodsFromServer } from '../../networking/Server.js'
import ContentClass from './ContentClass.js';

class ScrollViewExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            names: [],
            content: []
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
                            // <View key={item.id} style={styles.item}>
                            //     <Text>{item.name}</Text>
                            // </View>
                            
                            <View style={{ backgroundColor: '#000' }}>
                                <View style={{ paddingTop: 20, padding: 10 }}>
                                    <Text style={{ fontSize: 13, color: '#fff', fontWeight: 'bold' }}>{index}</Text>
                                    <Text style={{ fontSize: 9, color: '#aaa9a9', fontWeight: 'bold' }} >{item.list[0].Name}</Text>
                                    <ContentClass />
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