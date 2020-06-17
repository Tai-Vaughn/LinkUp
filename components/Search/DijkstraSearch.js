/* Dijkstra's searching algorithm  */
import React, { Component } from 'react';

class DijkstraSearch extends Component {
    constructor({ distance, to }) {
        this.distance = distance;
        this.toNodeName = to;
    }
    //to get path send start and end nodes to dijkstra search.
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
        //Mark your selected initial node with a current distance of 0 and the rest with infinity.
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
                //Set the non-visited node with the smallest current distance as the current node C.
            const current = queue.shift();
            
            //Mark the current node C as visited.
            tested.push(current);

            current.paths.forEach(link => {
                const endPoint = graph.nodes[link.toNodeName];
                if (tested.includes(endPoint)) return;

                const currentDistance =
                    nodesProps[current.name].distanceFromStart;
                //For each neighbour N of your current node C: add the current distance of C with the weight of the edge connecting C-N. 
                const newDistance =
                    currentDistance +
                    DijkstraSearch.getDistance(
                        link.distance, //to replace current link and endpoint for function
                    );
                        //If it's smaller than the current distance of N, set it as the new current distance of N.
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

    static getDistance = (distance) => {
        let safety = 0.75;//should vary
        let weight = distance * (1 + safety);
        return weight;
    }

}

export default DijkstraSearch;

/*Dijkstra's Algorithm again:

Mark your selected initial node with a current distance of 0 and the rest with infinity.
Set the non-visited node with the smallest current distance as the current node C.
For each neighbour N of your current node C: add the current distance of C with the weight of the edge connecting C-N. 
If it's smaller than the current distance of N, set it as the new current distance of N.
Mark the current node C as visited.
If there are non-visited nodes, go to step 2.*/