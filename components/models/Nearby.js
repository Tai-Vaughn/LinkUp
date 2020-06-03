import { getPoints } from "./utils";
import { path } from "./Node";
//import { List, ListItem } from 'react-native-elements';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, Button, View, ScrollView } from "react-native";
//import ActivePerson from './Activeperson';

export const findNearbyPersons{
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
return {
<View>
</View>}
};

export const viewGroups{
    const group;
    if (group === 0){
        console.warn('No Groups', group)
        return;
    }
    if (group > 0) {
    return (
        <View style={styles.container}>
           
                <FlatList
                    //keyExtractor={(item, index) => item.id}
                    data={group}
                    renderItem={itemData=> (
                    <View style={styles.listItems} >
                    <Text> {itemData.item.value}</Text>
                    </View>)
                    
                    />
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
    })
 /*<ScrollView>
                {groupsViewer.map(group => (
                    <View key={group} style={styles.listItems}>
                        <Text> {group} </Text>

                    </View>))}

                <ScrollView />*/