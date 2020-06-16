import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput } from 'react-native';
import {person} from './Person';

class ActivePerson extends React.Component(person) {
    constructor({person}) {
        this.name = person.name,
        this.start = person.start,
        this.end = person.end,
        this.path=person.path,
        this.status = 'not-active';//not automatically active
    };
    setStatusHandler = () => {
        const activpersons = []; //array of active persons
        let activeNow='';
        /*remove active
         * if (this.name === persons.name & this.status === 'active') {
            activpersons.pop(this.name);
            this.status = 'not-active';
        }*/
        if (this.status === 'not-active') {
            this.status = 'active';
            //should return person properties
            activeNow=(person.name,person.start, person.end,person.path,this.status);
            activpersons.push(activeNow);
            
            //adds the name of the person and changes their status to active
            return activpersons;
        } 
    };
    
    render() {
        return (
            <View>
                 <Button
            title="Find Persons"
            onPress={props.onGetPersons}
         />
            </View>
        );
               
    }

};

const styles = StyleSheet.create({

});

export default ActivePerson;