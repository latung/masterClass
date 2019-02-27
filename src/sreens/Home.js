// import React, { Component } from 'react';
// import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
// import { getFoodsFromServer } from '../../networking/Server.js';
// export default class trangchu extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         deleteRowKey: null,
//     //         foodsFromServer: []
//     //     }
//     //     // this._onPressAdd = this._onPressAdd.bind(this);
//     // }
//     // // componentDidMount(){
//     // //     // fetch('https://ionicons.com/')
//     // // }
//     // // refreshDataFromServer = () =>{
//     // //     getFoodsFromServer().then((foods)=>{
//     // //         this.setState({ foodsFromServer: foods })
//     // //     }).catch((error) =>{
//     // //         this.setState({ foodsFromServer: [] })
//     // //     })
//     // // }
//     // // refreshDataFlatList = (activeKey) =>{
//     // //     this.setState((prevState) => {
//     // //         return {
//     // //             deleteRowKey: activeKey
//     // //         };
//     // //     })
//     // //     this.refs.flatList.scrollToEnd();
//     // // }
//     // render() {
//     //     return (
//     //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     //             <Text >Home!11</Text>
//     //             <TouchableOpacity style={{ backgroundColor: "red", padding: 20 }} onPress={getFoodsFromServer}>
//     //                 <Text>X</Text>
//     //             </TouchableOpacity>
//     //         </View>
//     //     );
//     // }
//     state = { albums: [] };

//     componentWillMount() {
//         //axios.get('https://rallycoding.herokuapp.com/api/music_albums') .then(response => console.log(response));
//         axios.get("https://api.linnworks.net/api/Inventory/GetCategories", {
//             headers: {
//                 'Authorization': 'token-from-auth-api'
//             }
//         }).then((response) => {
//             console.log(response.data);
//         })
//     }
// }

import React, { Component } from 'react';
import { Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class MoviesComponent extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isLoading: true,
    //         cloneMovies: []
    //     }
    // }
    // componentDidMount() {
        // fetch("https://us-central1-tai-xiu-ef296.cloudfunctions.net/getDataReactNavite")
        //     .then((response) => {
        //         var t = JSON.parse(response._bodyInit);
        //         console.log(t);
        //         console.log(t[0].titel);
        //     })
        //     .then((responseJson) => {
        //         console.log(responseJson);
                
        //         // var standardDataSource = new ListItem.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2})
        //         // this.setState({
        //         //     isLoading: false,
        //         //     clonedMovies: standardDataSource.cloneWithRows(responseJson.movies)
        //         // })
        //     })
    // }
    
    render() {
        // console.log(1111);
        
        // if (this.state.isLoading) {
        //     return(
        //         <View>
        //             <ActivityIndicator />
        //         </View>
        //     )
        // }
        var movies = [
            {
                titel: "tug",
                year: "20001"
            },
            {
                titel: "tug1",
                year: "20002"
            },
            {
                titel: "tug2",
                year: "20003"
            }
        ];
        return (
            <View>
                <FlatList
                    data={movies}
                    renderItem={
                        ({ item }) => <Text>titel: {item.titel}, release year: {item.year}</Text>
                    }
                    keyExtractor={(item, index) => index.toString()}
                />
                {/* <TouchableOpacity style={{ backgroundColor: "red", padding: 20 }} onClick={ componentDidMount }>
                    <Text>X</Text>
                </TouchableOpacity> */}
            </View>
        )

    }
}