
import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import ListGroup from '../components/ListGroup.js';
export default class trangchu extends Component {
   render() {
      return (
         <View>
            <ScrollView>
                <ListGroup />
            </ScrollView>
         </View>
      )
   }
}
