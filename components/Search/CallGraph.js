import React from 'react';
import { Image, StyleSheet, TouchableHighlight, Text, View, TouchableOpacity, Button } from 'react-native';


export default function CallGraph() {

    state = {
        userGraph: null,
        path: []
    }
    const addPointsHandler=(pointName, pointName2)=>{
        setPoint1(currentPoints=>[...currentPoints,{value:pointName}]);
        setPoint2(currentPoints=>[...currentPoints,{value:pointName2}]);
    };
    return (
        <View style={styles.container}>
            <Text> Graph</Text>
            <Graphs onGetGraph={this.getUserGraphHandler}
            userGraph={this.state.userGraph}
            path={this.state.path} />
            
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
