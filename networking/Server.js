import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';
const apiGetAllFoods = 'https://us-central1-tai-xiu-ef296.cloudfunctions.net/getDataReactNavite';
async function getFoodsFromServer() {
    try {
        let response = await fetch(apiGetAllFoods);
        let responseJson = await response.json();
        // console.log(response);
        // console.log(responseJson);
        // var data = 'tggdaass'
        // console.log(responseJson);
        return responseJson; //list of foods
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
export {getFoodsFromServer};