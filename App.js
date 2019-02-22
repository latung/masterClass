// import React, { Component } from 'react';
// import { Whatever, You, Need } from "react-native";
// // import 'bootstrap/dist/css/bootstrap.css';
// import { Platform, StyleSheet, Navigator, View, Text, TouchableHighlight } from 'react-native';
// import Home from "./components/Home.js";
// import Group from "./components/Group.js";
// import Login from "./components/Login.js";
// import Search from "./components/Search.js";
// // import {Text, Navigator, TouchableHighlight} from 'react-native';

// // type Props = {};
// export default class App extends Component {
//     // renderScene(route, navigator){
//     //     switch (route.name) {
//     //         case 'Home': return(
//     //             <Home />
//     //         )

//     //         case 'Group': return(
//     //             <Group />
//     //         )

//     //         case 'Search': return(
//     //             <Search />
//     //         )

//     //         case 'Login': return(
//     //             <Login />
//     //         )

//     //     }
//     // }
//     render() {
//         return (
//             // <View style={styles.container}>
//             //     <Text style={styles.tung}>helo world</Text>
//             //     <Home hoten="tung"/>
//             //     <Home hoten="tung1"/>
//             //     <Home hoten="tun g12"/>
                
//             // </View>
//             <Navigator
//                 // renderScene={(route, navigator) =>
//                 //     // ...
//                 // }
//                 navigationBar={
//                     <Navigator.NavigationBar
//                     routeMapper={{
//                         LeftButton: (route, navigator, index, navState) =>
//                         { return (<Text>Cancel</Text>); },
//                         RightButton: (route, navigator, index, navState) =>
//                         { return (<Text>Done</Text>); },
//                         Title: (route, navigator, index, navState) =>
//                         { return (<Text>Awesome Nav Bar</Text>); },
//                     }}
//                     style={{backgroundColor: 'gray'}}
//                     />
//                 }
//             />
//             // <Navigator>
//             //     {/* // initialRoute = {{name: 'Home'}}
//             //     // renderScene={this.renderScene} */}
//             //     <View style={styles.container}>
//             //         <Text style={styles.tung}>helo world</Text>
//             //         <Home hoten="tung"/>
//             //         <Home hoten="tung1"/>
//             //         <Home hoten="tun g12"/>
                
//             //     </View>
//             // </Navigator>
//             // <Navigator
//             //     initialRoute={{title: 'Awesome Scene', index: 0}}
//             //     renderScene={(route, navigator) => <Text>Hello {route.title}!</Text>}
//             //     style={{padding: 100}}
//             // />
//         );
//     }
    
// }

// const styles = StyleSheet.create({
//     container: {
//         // flex: 1,
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         // backgroundColor: '#F5FCFF',
//     },
//     tung: {
//         // textAlign: 'center',
//         color: '#000'
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });

// // // import React, {Component} from 'react';
// // // import {Text, Navigator, TouchableHighlight} from 'react-native';

// // // export default class NavAllDay extends Component {
// // //   render() {
// // //     return (
// // //         <Navigator
// // //         renderScene={(route, navigator) =>
// // //             console.log(123)
            
// // //         }
// // //         navigationBar={
// // //            <Navigator.NavigationBar
// // //              routeMapper={{
// // //                LeftButton: (route, navigator, index, navState) =>
// // //                 { return (<Text>Cancel</Text>); },
// // //                RightButton: (route, navigator, index, navState) =>
// // //                  { return (<Text>Done</Text>); },
// // //                Title: (route, navigator, index, navState) =>
// // //                  { return (<Text>Awesome Nav Bar</Text>); },
// // //              }}
// // //              style={{backgroundColor: 'gray'}}
// // //            />
// // //         }
// // //       />
// // //     );
// // //   }
// // // }
// // import React from 'react';

// // import {AppRegistry, StyleSheet, Text, View} from 'react-native';
// // import {StackNavigator,} from 'react-navigation';

// // // import LoginPage from './src/page/login-page/login-page';
// // // import MainPage from './src/page/main-page/main-page';
// // // import StartPage from './src/page/start-page/start-page';

// // export default class Project extends React.Component {

// // render(){
// // const Project =StackNavigator({
// // // Start:{screen:StartPage},
// // // Main:{screen:MainPage},
// // // Login:{screen:LoginPage},

// // });
// // return(
// // <Project ref={nav=>{this.navigator=nav;}}/>
// // );
// // }
// // }
// // AppRegistry.registerComponent('Project',()=>Project)
// // import { connect } from 'react-redux';
// // import {AppNavigator, TabNavigator} from '../navigator';
// // import { addNavigationHelpers } from 'react-navigation';
// // import React, { Component } from 'react';

// // // @connect(state => ({nav: state.navigation, navigation: state.navigation, data: state.data}))
// // export default class AppContainer extends Component {
// // 	render() {
// // 		const { dispatch, nav } = this.props;
// // 		const navigation = addNavigationHelpers({dispatch, state: nav});
// // 		// using AppNavigator instead of TabNavigator in the line below will make it pop
// // 		return <AppNavigator navigation={navigation} />;
// // 	}
// // }
import React from "react";
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TabNavigator, TabBarBottom} from 'react-navigation';

class HomeScreen extends React.Component {
    render(){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home Screen!</Text>
            </View>
        )
    }
}
class SettingsScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <Text>Settings Screen!</Text>
            </View>
        )
    }
}
export default TabNavigator(
    {
        Home: { screen: HomeScreen },
        Settings: { screen: SettingsScreen },
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;

                } else if (routeName === 'Settings') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }
                return <Ionicons name={iconName} size={25} color={tintColor}></Ionicons>;
            }
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false
    }
);