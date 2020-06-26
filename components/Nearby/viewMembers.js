import React, { useState, Component } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, Button, View, ScrollView } from "react-native";
//handler to list group name and members when selected
export default class showGroupMembersHandler extends React.Component(group){
    render(){
        return(
            <View>
            <Text>{group.groupName}</Text>
            <Text> {group.groupStart} to {group.groupDestination}</Text>
            <Text> {group.departureTime}</Text>
            <ScrollView>
                
                <Text>{group.members}</Text>
            </ScrollView>
        </View>
        );
    }
    
    
        
}