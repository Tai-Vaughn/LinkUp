import React, { useState } from 'react';
import {TextInput, StyleSheet, Text, View } from 'react-native';
/* eslint-disable no-mixed-operators */
//import sillyname from "sillyname";

const getMinOrMaxPropertyHelper = (arr, prop, type) => {
	
	if (!arr) return undefined;

	return arr.reduce((m, item) => {
		const value = item[prop];

		if (!m) return value;

		if (type === "min" && value < m) return value;
		if (type === "max" && value > m) return value;

		return m;
	}, undefined);
};

export const getMinProperty = (arr, prop) =>
	getMinOrMaxPropertyHelper(arr, prop, "min");

export const getMaxProperty = (arr, prop) =>
    getMinOrMaxPropertyHelper(arr, prop, "max");


export const getSafetyLevel = (point1, point2) => {
// calculate the total safety from the route and members of the group

};

export const getPoints = (point1, point2) => {
    //should have select of points on map instead
    //obtain user’s start location and end destination from user and database
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    return(
        <View>
             <Text>Enter Starting Point: </Text>
            <TextInput
                 style={styles.input}
                 placeholder='e.g.Humanities'
                 onChangeText={(val) => setStart(val)}
             />
             <Text>Enter Destination Point: </Text>
             <TextInput
                 style={styles.input}
                 placeholder='e.g.Students Union'
                 onChangeText={(val) => setEnd(val)}
            />
            <Text> {start}, {end} </Text>
         </View>

        
        //point2 = end, (name, x, y) ? (name, distance, safety) makes up a point
            );
        
    };
    
        //not using coordinates, only weight and distance between points
export const getEquationOfLineFromTwoPoints = (point1, point2) => {
	const equation = {
		gradient: (point1.y - point2.y) / (point1.x - point2.x),
	};
	let parts;

	equation.yIntercept = point1.y - equation.gradient * point1.x;
	equation.toString = () => {
		if (Math.abs(equation.gradient) === Infinity) {
			return `x = ${point1.x}`;
		}
		parts = [];

		if (equation.gradient !== 0) {
			parts.push(`${equation.gradient}x`);
		}

		if (equation.yIntercept !== 0) {
			parts.push(equation.yIntercept);
		}

		return `y = ${parts.join(" + ")}`;
                    };
                
                    return equation;
                };
                
                export const floatToFixedIfNeeded = number =>
                    number.toFixed(2).replace(/[.,]00$/, "");
                
                
        
          //generate weight based on distance, security, time, etc      
export const getWeight = (name, distance, safety) =>{
                weight = distance * (1 + safety);
            };

        //distance will be drawn from database based on the name of the node/point. Set to random vaue 20
export const getDistance = (a, b) => 20;

export const getExampleGraphJSON = () => {
	// return HARCODED_GRAPH;

	const nodes = [];
	const links = [];

	const usedNames = [];

	for (let i = 0; i < 8; i += 1) {
		for (let j = 0; j < 8; j += 1) {
			let name;
			do {
				name = db.name;//get name of point from db
			} while (usedNames.includes(name));
			usedNames.push(name);

			const weight = getWeight(name, distance, safety); //Need to put the value of weight, x, y per node. draw from database
			const distance = db.distance;
			const safety = 0.75;
        //do a comparison of weight and distance to return the lesser one? to keep shortest path
           /* if(distance>weight){
                const node={name, weight};
}
            if(weight>distance{
                const node={name, distance};
            }*/
			const node = { name, weight};
			nodes.push(node);
		}
	}
        //make adjacent list? compare the weights of the adjacent nodes to choose path?
	nodes.forEach(node => {
		const destinations = nodes.map(nd => { //has to be adjusted to pull from database based on selected points
			const weight =
				nd.name === node.name ? Infinity : getWeight(node, distance, safety);
			return { name: nd.name, weight };
		});

		destinations.sort((a, b) => a.weight - b.weight);

		destinations.slice(0, 3).forEach(destination => {
			const start = node.name;
			const end = destination.name;
			const distance = destination.weight; //has to be adjusted to real value for weight? or for distance?

			const link = { start, end, distance };
			links.push(link);
		});
	});

	return { nodes, links };
                        };
                        
   const styles = StyleSheet.create({
        input:{
                borderWidth:1,
                borderColor: '#777'
    },
   });