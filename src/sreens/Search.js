import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements'

// constructor () {
//     super()
//     this.state = {
//       selectedIndex: 2
//     }
//     this.updateIndex = this.updateIndex.bind(this)
//   }
//   updateIndex (selectedIndex) {
//     this.setState({selectedIndex})
//   }

export default class trangchu extends Component {
    render() {
        return (
            <View style={{backgroundColor: '#000', flex: 1}}>
                <View style={{ paddingLeft: 16, paddingRight: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#505050' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Icon
                            name='search'
                            color='#fff' />
                        <TextInput placeholder='Try "Film & TV"' placeholderTextColor="gray" style={{ color: '#fff' }} />
                    </View>
                    <Icon
                        name='close'
                        color='#fff' />
                </View>
                <View style={{ paddingTop: 30, paddingLeft: 11, paddingRight: 10 }}>
                    <Text style={{ fontSize: 10,color: '#aaa9a9', fontWeight: 'bold'}}>CATEGORIES</Text>
                    <Text style={{ paddingTop: 30, fontSize: 11,color: '#fff', fontWeight: 'bold'}}>Business, Politics & Society</Text>
                    <Text style={{ paddingTop: 25, fontSize: 11,color: '#fff', fontWeight: 'bold'}}>Culinary Arts</Text>
                    <Text style={{ paddingTop: 25, fontSize: 11,color: '#fff', fontWeight: 'bold'}}>Design, Photography, & Fashion</Text>
                    <Text style={{ paddingTop: 25, fontSize: 11,color: '#fff', fontWeight: 'bold'}}>Film & TV</Text>
                    <Text style={{ paddingTop: 25, fontSize: 11,color: '#fff', fontWeight: 'bold'}}>Music & Entertainment</Text>
                    <Text style={{ paddingTop: 25, fontSize: 11,color: '#fff', fontWeight: 'bold'}}>Science & Technology</Text>
                    <Text style={{ paddingTop: 25, fontSize: 11,color: '#fff', fontWeight: 'bold'}}>Sports & Games</Text>
                    <Text style={{ paddingTop: 25, fontSize: 11,color: '#fff', fontWeight: 'bold'}}>Writing</Text>
                </View>
            </View>
        );
    }
}
