import { getPoints } from "./utils";
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, Button, View, ScrollView } from "react-native";
import ActivePerson from "./ActivePerson";

//take the list of active persons and compare the path from each to the current user start and destination
const nearbyPersons = (path) => {
     //if the destination entered by the user is a point along a longer route that other users are currently travelling
let start = getPoints.point1; //take input from user
let end = getPoints.point2;
const {path} = path;//need to pass actual path and not empty array
let i = path.length;

let person={person};
let activeperson='';
//active person should be a variable person, compared with the path to create a list of active persons
    for(let j=0;j<i; j++){
    //need to separate by users to compare by username
    //adds a person if they have a start or end point that matches the path
        const pathNow=path[j];
    if (pathNow === start || pathNow === end) {
        activeperson=ActivePerson.setStatusHandler(person);
        CreateGroup.addParty(activeperson);
    }
    }

//take the person and compare the path from each to the current user start and destination; generate list of active persons
const nearby = (person) => {
    //if the destination entered by the user is a point along a longer route that other users are currently travelling
//let start = getPoints.point1; 
let end = getPoints.point2;//take input from user
const {path} = person.path;//need to pass actual path and not empty array
let i = path.length;

let person={person}; //if the person has a path
let activeperson='';
//active person should be a variable person, compared with the path to create a list of active persons
   for(let j=0;j<i; j++){
   //need to separate by users to compare by username
   //adds a person if they have an end point that matches the path
       const pathNow=path[j];
   if (pathNow === end) {
       activeperson=ActivePerson.setStatusHandler(person);
       CreateGroup.addParty(activeperson);
   }
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

export default nearbyPersons;