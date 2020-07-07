import React  from 'react';
import { View , Text, Button, StyleSheet, Image} from 'react-native';
import {globalStyles} from '../Styles'; 
import { ScrollView } from 'react-native-gesture-handler';
import {Icon } from 'react-native-elements'

export default function Header({navigation, title}){
    return(
        <View style={StyleSheet.header}>
            <Icon name='menu' 
                underlayColor="transparent"
                size={28}
                styles={styles.icon}
                onPress={()=> this.props.navigation.toggleDrawer()} />
            <View>
                <Text style={StyleSheet.headertext}>{title}</Text>
            </View>
        </View>
    )
}
const styles= StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'steelblue'
    },
    headertext:{
        fontWeight:'bold',
        fontSize: 20,
        color:'#333',
    },
    icon:{
        position:'absolute',
        left:16
    },
})