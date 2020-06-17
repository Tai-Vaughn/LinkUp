import React from 'react';
import { Image, StyleSheet, TouchableHighlight, Text, View, TouchableOpacity, Button } from 'react-native';
import Graph from './Graph';

export default function CallGraph() {
    
    state = {
        pointStart: null,
        pointEnd: null,
        currentPoints:[]
    }

    const addPointsHandler=(pointName, pointName2)=>{
        this.setState({
            pointStart:setPoints(currentPoints=[...currentPoints,{value:pointName}]),
            pointEnd:setPoints(currentPoints=[...currentPoints,{value:pointName2}])
            
        });
       
    };
    const getUserGraphHandler=()=>{

    };

    return (
        <View style={styles.container}>
            <View>
                 <getPoints onAddPoint={addPointsHandler} />
            </View>
            <View>
                <Text>Graph</Text>
                <Map pointName={this.state.pointStart} 
                pointName2={this.state.pointEnd} />
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