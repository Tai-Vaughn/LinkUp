/* Dijkstra's searching algorithm  */
import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

class DijkstraSearch extends Component {
    constructor({ distance, to }) {
        this.distance = distance;
        this.toNodeName = to;
    }
    static search(start, finish, graph) {
        if (!graph.nodes[start] || !graph.nodes[finish]) {
            console.error("Nodes are not part of the graph!");
            return null;
        }

        const beginning = graph.nodes[start];
        const end = graph.nodes[finish];

        const queue = [];
        queue.push(beginning);

        const tested = [];
        const nodesProps = Object.keys(graph.nodes).reduce(
            (reduced, name) => ({
                ...reduced,
                [name]: { distanceFromStart: Infinity },
            }),
            {},
        );
        nodesProps[start] = { distanceFromStart: 0 };

        while (queue.length > 0) {
            queue.sort(
                (a, b) =>
                    nodesProps[a.name].distanceFromStart -
                    nodesProps[b.name].distanceFromStart,
            );

            const current = queue.shift();
            tested.push(current);

            current.paths.forEach(link => {
                const endPoint = graph.nodes[link.toNodeName];
                if (tested.includes(endPoint)) return;

                const currentDistance =
                    nodesProps[current.name].distanceFromStart;
                const newDistance =
                    currentDistance +
                    DijkstraSearch.getDistance(
                        link.distance, //to replace current link and endpoint for function
                    );

                if (nodesProps[endPoint.name].distanceFromStart > newDistance) {
                    nodesProps[endPoint.name] = {
                        prev: current,
                        distanceFromStart: newDistance,
                    };
                }

                const index = queue.indexOf(endPoint);
                if (index !== -1) {
                    queue[index] = endPoint;
                } else {
                    queue.push(endPoint);
                }
            });
        }

        if (nodesProps[finish].distanceFromStart !== Infinity) {
            const path = [];
            let last = end;
            while (last.name !== start) {
                path.unshift(last);
                last = nodesProps[last.name].prev;
            }
            path.unshift(beginning);
            return path;
        }

        return null;
    }

    //possibly remove distanceType and rearrange code for getDistance.
    static getDistance = (distance) => {
        let safety = 0.75;//should vary
        let weight = distance * (1 + safety);
        if (distance > weight) {
            return weight; 
            //returns whichever of the two is less for the actual distance which includes the safety
        }
        if (weight > distance) {
            return distance;
        }

        return 0;
    }

};
const styles = StyleSheet.create({

});

export default DijkstraSearch;
