import React, { Component } from 'react';
import { View, Text, Icon } from 'react-native';
import Home from "./sreens/Home.js";
import { StackNavigator, TabNavigator } from 'react-navigation';
// import Group from "./sreens/Group.js";
// import Login from "./sreens/Login.js";
// import Search from "./sreens/Search.js";
import SignIn from './sreens/SignIn';
import LogIn from './sreens/LogIn';

export const LogInsStack = StackNavigator({
    // ManHinh_LogIn:{
    //     screen: SignIn,
    //     // navigationOptions: {
    //     //     title: 'Home1',
    //     //     tabBarIcon: <ion-icon name="search"></ion-icon>
    //     // }
    //     navigationOptions : false
    // },
    ManHinh_SignIn:{
        screen: LogIn,
        // navigationOptions: {
        //     title: 'Group'
        // }
    }
})
// export const UserStack = StackNavigator ({
//     ManHinh_User:{
//         screen: Login,
//         navigationOptions: {
//             title: 'Login'
//         }
//     }
// })
// export const SearchStack = StackNavigator ({
//     ManHinh_User:{
//         screen: Search,
//         navigationOptions: {
//             title: 'Search'
//         }
//     }
// })
// export const GroupStack = StackNavigator ({
//     ManHinh_User:{
//         screen: Group,
//         navigationOptions: {
//             title: 'Group'
//         }
//     }
// })
// // export const SearchStack = StackNavigator ({
// //     ManHinh_User:{
// //         screen: Search,
// //         navigationOptions: {
// //             title: 'Search'
// //         }
// //     }
// // })

// export const Tabbar =  TabNavigator({
//     Home: {
//         screen: HomeStack
//     },
//     Group: {
//         screen: GroupStack
//     },
//     Search: {
//         screen: SearchStack
//     },
//     Login: {
//         screen: UserStack
//     }
// },
// {
//     tabBarPosition: "bottom",
//     swipeEnabled: true,
//     tabBarOptions:{
//         style:{
//             backgroundColor: '#000'
//         },
//         inactiveTintColor:'#a2a3a3',
//         activeTintColor:'#fff'
//     }
// })