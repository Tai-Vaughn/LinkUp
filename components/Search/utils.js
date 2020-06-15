import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
             
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

			const weight = getWeight(name, distance, safety); //Need to pull the value of distance, calculate safety. draw from database
			const distance = db.distance;
			const safety = 0.75;//should vary
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