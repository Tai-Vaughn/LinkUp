// Function for Dijkstra's Algorithm 
//https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-in-java-using-priorityqueue/

import Node from './Node';
import { calcNeigh } from './Neighbor';
export default class Dijkstra(list, adj, src) {
    //dijkstra(List < List < Node > > adj, int src)
    //visited is a set that contains the names of the nodes marked as visited.E.g. { 'A', 'C' }.
    //currentDistances is a dictionary that contains the current minimum distance of each node.E.g. { 'A': 0, 'B': 3, 'C': 5 }
    constructor(){
        this.adj = adj;
    }
    constructor() {
        this.nodes = {};
    }
    addToQueue(){
        pq.add(this.nodes(src,0))
    }
    {
        let v;
        for (int i = 0; i < v; i++) {
            dist[i] = Integer.MAX_VALUE;
        }
        // Add source node to the priority queue 
        pq.add(new Node(src, 0));
        // Distance to the source is 0 
        dist[src] = 0;
        while (visited.size() != v) {

            // remove the minimum distance node  
            // from the priority queue  
            int u = pq.remove().node;

            // adding the node whose distance is 
            // finalized 
            visited.add(u);

            calcNeigh(u);
        }
    }
}





