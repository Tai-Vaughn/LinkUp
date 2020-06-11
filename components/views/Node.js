export default class Node {
    constructor({ nodeID, neighbor, distance, safety }) {
        this.nodeID = nodeID;
        this.neighbor = neighbor; //adjust based on value in database
        this.distance = distance;
        this.safety = safety;
        this.weight=0; //cost of edge
        this.paths = [];
    }
    getWeight(distance, safety) {
        this.weight = (distance * 1 + safety);
        return weight;
    }
    compare(node1 => Node, node2=> Node,) {
        if (node1.weight < node2.weight) {
            return -1;
        }
        if (node1.weight > node2.weight) {
            return 1;
        }
        else {
            return 0;
        }
    }
}