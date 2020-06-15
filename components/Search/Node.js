import { floatToFixedIfNeeded } from "./utils";
import {getPoints} from "./getPoints";
import React, { Component } from 'react';
import { View } from "react-native";

//class Node
class Node extends Component{
    constructor({ name, weight }) {
        this.name = name;
        this.weight = weight; //adjust based on value in database
        this.paths = [];
    }
    render(){
        let currentPoints=[];
        let pathUsed=[];
        const addPointsHandler=(pointName, pointName2)=>{
            setPoint1(currentPoints=>[...currentPoints,{id:0,value:pointName}]);
            setPoint2(currentPoints=>[...currentPoints,{id:1,value:pointName2}]);
        }
        return(
            
            <View>
                <View>
                    <getPoints onAddPoint={addPointsHandler} />
                </View>
                <View>
                    <Node pathUsed={this.generatePath.visited} />
                </View>
            </View>
        );
    }
    
    insertPath=(path)=> {
        if (this.paths.some(p => p.toNodeName === path.toNodeName)) return;
        if (this.name === path.toNodeName) return;

        this.paths.push(path);
    }
    generatePath=(path)=> {
    //creates path based on weight from start to end.
    let total_weight = 0;
    let i = 0;
    let start = currentPoints[0];
    let end = currentPoints[1];
    let visited = [];
    //let unvisited = [];
    //for a graph:node, set of neighbors, cost for each neighbour, distance from a-b
    //weight: combination of safety and physical distance; generate algorithm for weight
    path = [] //push start on path?
    path.push(start);
    for (this.paths[i] === start; this.paths[i] === end; this.paths[i++]) {
        if (a.weight < b.weight) {
            total_weight = a.weight[i] + total_weight;
            path += a;
            visited.push(path);
            //need to compare weight from neighbors in database.

        }
        if (b.weight < a.weight) {
            total_weight = b.weight[i] + total_weight;
            path += b;
            visited.push(path);
        }

        total_weight = this.weight[i] + total_weight;
        path.push(path);
        
    }

    }
    removeLink(toNodeName) {
        this.paths = this.paths.filter(link => link.toNodeName !== toNodeName);
    }

    toString() {
        const weight = floatToFixedIfNeeded(this.weight);
        return `${this.name} ${weight} u.`;
    }
    toJSON() {
        return {
            name: this.name,
            weight: this.weight,
        };
    }

};
const styles = StyleSheet.create({

});

export default Node;
