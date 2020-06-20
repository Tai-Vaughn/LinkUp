import React, { useState, Component } from 'react';
import { FlatList, StyleSheet, Text, Button, View, ScrollView } from "react-native";
import newId from './newId';

export default class NewGroup extends Component{
    constructor() {
        groupName='',
        groupStart='',
        groupDestination='',
        departureTime='',
        groupMembers = [], //array of persons that choose the same group
        id=newId()
    };
    createGroup(){

    }
};
   
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    listItems: {
        padding: 10,
            fontSize: 18,
            height: 44,
        },
    });