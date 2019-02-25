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
// // // }




// import React from "react";
// import {Text, View} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {TabNavigator, TabBarBottom} from 'react-navigation';

// class HomeScreen extends React.Component {
//     render(){
//         return(
//             <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
//                 <Text>Home Screen!</Text>
//             </View>
//         )
//     }
// }
// class SettingsScreen extends React.Component{
//     render(){
//         return(
//             <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
//                 <Text>Settings Screen!</Text>
//             </View>
//         )
//     }
// }
// export default TabNavigator(
//     {
//         Home: { screen: HomeScreen },
//         Settings: { screen: SettingsScreen },
//     },
//     {
//         navigationOptions: ({ navigation }) => ({
//             tabBarIcon: ({ focused, tintColor }) => {
//                 const {routeName} = navigation.state;
//                 let iconName;
//                 if (routeName === 'Home') {
//                     iconName = `ios-information-circle${focused ? '' : '-outline'}`;

//                 } else if (routeName === 'Settings') {
//                     iconName = `ios-options${focused ? '' : '-outline'}`;
//                 }
//                 return <Ionicons name={iconName} size={25} color={tintColor}></Ionicons>;
//             }
//         }),
//         tabBarOptions: {
//             activeTintColor: 'tomato',
//             inactiveTintColor: 'gray'
//         },
//         tabBarComponent: TabBarBottom,
//         tabBarPosition: 'bottom',
//         animationEnabled: false,
//         swipeEnabled: false
//     }
// );



// import React, { Component } from 'react';
// // import { Whatever, You, Need } from "react-native";
// // import 'bootstrap/dist/css/bootstrap.css';
// import { View, Text } from 'react-native';
// import {Tabbar} from "./Router";
// import Icon from './icon/index.js';
// // import Group from "./components/Group.js";
// // import Login from "./components/Login.js";
// // import Search from "./components/Search.js";
// // import {Text, Navigator, TouchableHighlight} from 'react-native';
// export default class App extends Component {
//     render(){
//         return(
//         //    <Tabbar/>
//             <Icon name="user" color="red"/>
//         )
//     }
// }
import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './sreens/Home';
import Group from './sreens/Group';
import Search from './sreens/Search';
import Login from './sreens/Login';
class HomeScreen extends React.Component {
    render() {
        return (
                <Home></Home>
        );
    }
}
class GroupScreen extends React.Component {
    render() {
        return (
            <Group></Group>
        );
    }
}
class SearchScreen extends React.Component {
    render() {
        return (
            <Search></Search>
        );
    }
}
class LoginScreen extends React.Component {
    render() {
        return (
            <Login></Login>
        );
    }
}
export default createBottomTabNavigator(
    {
        Home: HomeScreen,
        Group :GroupScreen,
        Search: SearchScreen,
        Login: LoginScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = <ion-icon name="hand"></ion-icon>;
                    // Sometimes we want to add badges to some icons. 
                    // You can check the implementation below.
                    IconComponent = HomeIconWithBadge;
                } else if (routeName === 'Settings') {
                    iconName = <ion-icon name="hand"></ion-icon>;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#fff',
            inactiveTintColor: 'gray',
            style:{
                backgroundColor: '#000'
            },
            // showIcon: true,
            // showLabel:false
        },
    }
);

// import React from 'react';
// import { Button, Text, View } from 'react-native';
// // import { Ionicons } from '@expo/vector-icons';
// import {Ionicons} from 'react-native-vector-icons/Ionicons';
// import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//         <Button
//           title="Go to Settings"
//           onPress={() => this.props.navigation.navigate('Settings')}
//         />
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Details!</Text>
//       </View>
//     );
//   }
// }

// const HomeStack = createStackNavigator({
//   Home: { screen: HomeScreen },
//   Details: { screen: DetailsScreen },
// });

// const SettingsStack = createStackNavigator({
//   Settings: { screen: SettingsScreen },
//   Details: { screen: DetailsScreen },
// });

// export default createAppContainer(createBottomTabNavigator(
//   {
//     Home: { screen: HomeStack },
//     Settings: { screen: SettingsStack },
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'Home') {
//           iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//         } else if (routeName === 'Settings') {
//           iconName = `ios-options${focused ? '' : '-outline'}`;
//         }

//         // You can return any component that you like here! We usually use an
//         // icon component from react-native-vector-icons
//         return <Ionicons name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     },
//   }
// ));
