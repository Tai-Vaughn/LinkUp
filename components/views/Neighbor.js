import Node from './Node';
export default class Neighbor {
    constructor({ v }) {
        this.edgedistance = -1;
        this.newdistance = -1;
        this.v = v;
    }
    constructor() {
        this.nodes = {};
    }
   get calcNeigh(v) {
        
        for (let i = 0; i < v.length; i++) {
            this.nodes = adjacent.get(v).get(i);//need a function for adjacent
            //if current node hasnt been processed
            if (visited.)//adjust from here to end to convertto js
                if (!settled.contains(this.nodes)) {
                    edgeDistance = this.nodes.weight;
                    newDistance = dist[v] + edgeDistance;
                }
                    // If new distance is cheaper in cost 
            if (newDistance < dist[this.nodes]) {
                dist[this.nodes] = newDistance;
            }
                        
 // Add the current node to the queue 
             priorityqueue.add(new Node(this.nodes, dist[this.nodes]));
        }
    }
}