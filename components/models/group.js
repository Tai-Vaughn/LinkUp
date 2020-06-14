import React, { Component } from 'react';
import { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput } from 'react-native';
import { getPoints } from "./utils";


class Group extends React.Component {
    constructor({ group, destination }) {
        this.group = [];
        this.destination = getPoints.point2;
    }
    render() {
        return (
            <View>
                <Text> {this.group}</Text>
                <Text>{this.destination}</Text>

                <View>

                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({

});

export default Group;
