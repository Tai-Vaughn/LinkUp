import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TextInput } from 'react-native';
import { getPoints } from "./getPoints";
import { path } from "./Node";

class Person extends Component {
    constructor({ name, start, end, path }) {
        this.name = name,
        this.start = start,
        this.end = end,
        this.path=path,
    }
    

};

const styles = StyleSheet.create({

});

export default Person;
/*render() {
        return (
            <View>
                <Text>{this.name}</Text>
                <Text>{this.start}</Text>
                <Text>{this.end}</Text>
                <Text>{this.path}</Text>
            </View>
        );
               
    }*/