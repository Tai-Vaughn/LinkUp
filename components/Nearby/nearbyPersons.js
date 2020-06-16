import { getPoints } from "./utils";
import { path } from "./Node";
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, Button, View, ScrollView } from "react-native";
//import ActivePerson from './Activeperson';

const findNearbyPersons = () => {
     //if the destination entered by the user is a point along a longer route that other users are currently travelling
let start = getPoints.point1;
let end = getPoints.point2;
const path = [];
let i = path.length;
let [activeperson, setActivePerson] = useState('name');
while (path[i] != 0) {
    //need to separate by users to compare by username
    //adds aperson if they have a start or end point that matches the path
    if (path[i] === start || path[i] === end) {
        addParty(activeperson);
    }
    i--;
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
 