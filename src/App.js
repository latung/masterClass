import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer, StackNavigator } from 'react-navigation';
import Home from './sreens/Home';
import Group from './sreens/Group';
import Search from './sreens/Search';
import SignIn from './sreens/SignIn';
import LogIn from './sreens/LogIn';
import {LogInsStack} from './Router';
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
            <SignIn></SignIn>
        );
    }
}

export default createBottomTabNavigator(
    {
        Home: HomeScreen,
        Group :GroupScreen,
        Search: SearchScreen,
        SignIn: LoginScreen
    },
    {
        // defaultNavigationOptions: ({ navigation }) => ({
        //     tabBarIcon: ({ focused, horizontal, tintColor }) => {
        //         const { routeName } = navigation.state;
        //         let IconComponent = Ionicons;
        //         let iconName;
        //         if (routeName === 'Home') {
        //             iconName = <ion-icon name="hand"></ion-icon>;
        //             // Sometimes we want to add badges to some icons. 
        //             // You can check the implementation below.
        //             IconComponent = HomeIconWithBadge;
        //         } else if (routeName === 'Settings') {
        //             iconName = <ion-icon name="hand"></ion-icon>;
        //         }

        //         // You can return any component that you like here!
        //         return <IconComponent name={iconName} size={25} color={tintColor} />;
        //     },
        // }),
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