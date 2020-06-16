import { getPoints } from "./getPoints";
import { path } from "./Node";
//import { List, ListItem } from 'react-native-elements';
import React, { useState, Component } from 'react';
import { FlatList, StyleSheet, Text, Button, View, ScrollView } from "react-native";
import {person} from './Person';
import {ViewGroups} from './viewGroups'
import nearbyPersons from "./nearbyPersons";
import newId from './newId';

//should be made from a list of active persons? 
export default class CreateGroup extends Component{
    constructor() {
        this.group = [], //array of persons that have the same path
        this.id=newId(),
           // {id/key: Math.random().toString(), value: group}
        this.start=getPoints.start,
        this.destination = getPoints.end;
        this.path=path;
    };
    addParty(person) {
        let i = this.path.length;
        let j=0;

    //adds person to group if they have selected the same destination.
    if (this.start===person.start && this.destination === person.end){
        this.group.push(person.name);
    }else{
        //if there are other users who also follow the same path as the user
        for(this.path[j];this.path[j]<i; j++){
            //takes a point from the path and compares
            if (this.path.point === person.path.point) {
                this.group.push(person.name);
                //person added to group if point matched
            } 
        }
        //or a while loop
        /*while (this.path[i] !== 0) {
            if (this.path.point === person.path.point) {
                this.group.push(person.name);
                //person added to group if point matched
            }
            i--;
        }*/
    }
    getMembersHandler = () => {

    }
    
}
//calls function to display the groups created as a list
return () {
    <View >
        
        <ViewGroups group={this.group} /> 
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
 