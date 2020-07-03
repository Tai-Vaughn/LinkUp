import React  from 'react';
import { FlatList, StyleSheet, Text, Button, View, ScrollView, TouchableOpacity} from "react-native";
import {globalStyles} from '../Styles'; 

ViewGroup=(props)=>{
    const {item}=this.props
            return (
                
                <View style={styles.container}>     
                    <View >
                        <Text style={styles.listItems}>{item.name}</Text>
                        <Text style={styles.listItems}>  {item.start} to {item.destination}</Text>
                        <Text style={styles.listItems}> {item.time}</Text>
                        
                    </View>
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
        listItems: {
            padding: 10,
                fontSize: 20,
                height: 44,
            },
        });
    export default ViewGroup;