import React  from 'react';
import { FlatList, StyleSheet, Text, Button, View, ScrollView, TouchableOpacity} from "react-native";
import {globalStyles} from '../Styles'; 
import * as DataService from '../Service/DataService'
import { date } from 'yup';

export default function ViewGroup({navigation}){
    return (
        
        <View style={styles.container}>     
            <View >
            <Text style={styles.listItems}>{this.props.route.params.GroupName}</Text> 
                
                <Text style={styles.listItems}>  {this.props.route.params.StartLocation} to {this.props.route.params.EndLocation}</Text>
                <Text style={styles.listItems}> {this.props.route.params.StartTime}</Text>
                
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
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'steelblue',
       padding: 50,
       justifyContent: 'center',
       alignItems: 'center',
        flex: 1,
    },
    menu:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        color: 'white',
        fontSize: 26,
       },
    text:{
        color: 'white',
        fontSize: 20,
        marginBottom: 50,
        fontFamily: 'righteous'
      },
      nullgroup:{
        color: 'black',
        fontSize: 18,
        fontFamily: 'righteous'
      },
    listItems: {
        padding: 10,
        alignItems: 'center',
            fontSize: 20,
            height: 44,
        },
    });