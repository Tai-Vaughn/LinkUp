import React  from 'react';
import { FlatList, StyleSheet, Text, Button, View, ScrollView, TouchableOpacity} from "react-native";
import {globalStyles} from '../Styles'; 
import * as DataService from '../Service/DataService'
import { date } from 'yup';

export default function ViewGroup({navigation}){
    return (
        
        <View style={styles.container}>     
            <View >
            <Text style={styles.listItems}>{navigation.getParam('GroupName')}</Text> 
                
                <Text style={styles.listItems}>  {navigation.getParam('StartLocation')} to {navigation.getParam('EndLocation')}</Text>
                <Text style={styles.listItems}> {navigation.getParam('StartTime')}</Text>
                
            </View>
            <ScrollView>
                <Text>{props.GroupMembers}</Text>
            </ScrollView>
            <View style={globalStyles.button}>
                <Button 
                title='Join'/>
            </View>
        </View>
        
    ); 


}