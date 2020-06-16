import { getPoints } from "./utils";
import { path } from "./Node";
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, Button, View, ScrollView } from "react-native";
import ActivePerson from "./ActivePerson";
import person from './Person';
import CreateGroup from "./createGroup";

const nearbyPersons = props => {
     //if the destination entered by the user is a point along a longer route that other users are currently travelling
let start = getPoints.point1;
let end = getPoints.point2;
const path = [];//need to take actual path and not empty array
let i = path.length;
let person={person};
let activeperson;
//active person should be a variable person, compared with the path to create a list of active persons

while (path[i] != 0) {
    //need to separate by users to compare by username
    //adds aperson if they have a start or end point that matches the path
   
    if (path[i] === start || path[i] === end) {
        activeperson=ActivePerson.setStatusHandler(person);
        CreateGroup.addParty(activeperson);
    }
    i--;
}
return(
    <View>
        <Text>Nearby:</Text>
        <FlatList
                    keyExtractor={(item, index) => item.id}
                    data={this.activeperson}
                    renderItem={item => (
                    <View style={styles.listItems} >
                        <Text> {item.value}</Text>
                    </View>)}/>
    </View>
);
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
export default nearbyPersons;