import React, { useState} from 'react';
import { FlatList, StyleSheet, Text, Button, View, ScrollView } from "react-native";

export default function ViewGroups (props){
    
    this.group= props.group;
    if (this.group === 0){
        console.warn('No Groups', this.group)
        return;
    }
    if (this.group > 0) {
        //if groups is populated display a list of persons/groups
    return (
        <View style={styles.container}>
           
                <FlatList
                    keyExtractor={(item, index) => item.id}
                    data={this.group}
                    renderItem={item => (
                    <View style={styles.listItems} >
                        <Text> {item.value}</Text>
                    </View>)}/>
        </View>
        
        /*<ScrollView>
                {groupsViewer.map(group => (
                    <View key={group} style={styles.listItems}>
                        <Text> {group} </Text>

                    </View>))}

         <ScrollView />*/
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
 