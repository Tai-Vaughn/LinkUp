import React from 'react';
import { Image, StyleSheet, TouchableHighlight, Text, View, TouchableOpacity, Button } from 'react-native';
import Graph from './Graph';

export default function CallGraph() {

    const addPointsHandler=(pointName, pointName2)=>{
        setPoint1(currentPoints=>[...currentPoints,{value:pointName}]);
        setPoint2(currentPoints=>[...currentPoints,{value:pointName2}]);
    };
    const getUserGraphHandler=()=>{

    };

    return (
        <View style={styles.container}>
            <Text> Graph</Text>
            <Map />
            
        <View>
            <getPoints onAddPoint={addPointsHandler} />
        </View>
    
            
        </View>

    );
    
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
/*

    state = {
        userGraph: null,
        path: []
    }
    
    <Graphs onGetGraph={this.getUserGraphHandler}
            userGraph={this.state.userGraph}
            path={this.state.path} />

    */