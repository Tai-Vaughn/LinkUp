import { getPoints } from "./utils";
import { path } from "./Node";
//import { List, ListItem } from 'react-native-elements';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, Button, View, ScrollView } from "react-native";
//import ActivePerson from './Activeperson';
export const creatGroup{
    constructor() {
        this.group = [],
           // {id/key: Math.random().toString(), value: group}
        this.start=getPoints.point1,
        this.destination = getPoints.point2;
    }
addParty(person) {
   let i = path.length;

    //adds person to group if they have selected the same destination.
    if (this.start===person.start && this.destination === person.end){
        this.group.push(person.name);
    }
    //if there are other users who also follow the same path as the user
    while (this.path[i] != 0) {
        if (this.path.point === person.path.point) {
            this.group.push(person.name);
            //person added to group
        }
        i--;
    }
    
}
return () {
    <View >
    </View >
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
 