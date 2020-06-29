import React, { useState} from 'react';
import { FlatList, StyleSheet, Text, Button, View, ScrollView} from "react-native";
import * as DataService from '../Service/DataService';
import showGroupMembersHandler from './viewMembers';

export default function ViewGroups (){
    addMemberHandler=(group,username)=>{
        group.members.push(username);
    }
    showGroupMembersHandler=(group)=>{
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
    //DataService.groups$.subscribe();
    let i=0;
    let group=[];
    groupsList= DataService.groups$.subscribe();
    j=groupsList.length;
    if (groupsList===0){
        console.warn('No Groups.')
            return;
    }else{
        for(group=groupsList[i];i<j;i++){
            //if groups is populated display a list of persons/groups
            //list group names
        return (
            <View style={styles.container}>
               <SafeAreaView style={styles.container}>
                <FlatList
                            keyExtractor={item=> item.id}
                            data={group}
                            renderItem={item => (
                            <View style={styles.listItems} >
                                <TouchableOpacity onPress={this.showGroupMembersHandler}>
                                    <Text>Available Groups: {item.groupName}</Text>
                                </TouchableOpacity>
                                
                            </View>)}/>
                </SafeAreaView>
                    
                <View style={globalStyles.button}>
                            <Button 
                            title='Search' 
                            onPress={() => DataService.getGroups()}
                            onPress={props.handleSubmit}
                            />
                </View>
            </View>
            
            
            );
        }
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
    /*
 <ScrollView>
                {groupsViewer.map(group => (
                    <View key={group} style={styles.listItems}>
                        <Text> {group} </Text>

                    </View>))}

         <ScrollView /> */