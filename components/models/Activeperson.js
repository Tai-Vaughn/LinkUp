import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput } from 'react-native';


class ActivePerson extends React.Component {
    constructor({ name, start, end }) {
        this.name = name;
        this.start = start;
        this.end = end;
        this.status = 'not-active';//not automatically active
    }
    setStatus = () => {
        const persons = []; //array of active persons

        /*remove active
         * if (this.name === persons.name & this.status === 'active') {
            persons.pop(this.name);
            this.status = 'not-active';
        }*/
        if (this.status === 'not-active') {
            persons.push(this.name);
            this.status = 'active';
            //adds the name of the person and changes their status to active
        } 
    }
    toString() {
        return `${this.name} (${this.start}, ${this.end}) ${this.status} u.`;
    }

    toJSON() {
        return {
            "name": this.name,
            start: this.start,
            end: this.end,
            status: this.status,
        };
    }
    render() {
        return (
            <View>
                <Text>{this.name}</Text>
                <Text>{this.start}</Text>
                <Text>{this.end}</Text>
                <Text>{this.status}</Text>
            </View>
        );
               
    }

};

const styles = StyleSheet.create({

});

export default ActivePerson;