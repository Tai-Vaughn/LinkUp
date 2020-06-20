export default class Graph {
    constructor(noOfVerticies) {
        this.noOfVerticies = noOfVerticies;
        this.AdjList = new Map()
    }

    addVerticies(node){
        this.AdjList.set(node,[]);
    }

    addEdge(src,dest,weight){
        this.AdjList.get(src).push({
            neighbour : dest,
            Cost: parseInt(weight)
        });

        this.AdjList.get(dest).push({
            neighbour : src,
            Cost: parseInt(weight)
        });
    }

    printGraph() 
    { 
    // get all the vertices 
    var get_keys = this.AdjList.keys(); 
  
    // iterate over the vertices 
    for (var i of get_keys){ 
        // great the corresponding adjacency list 
        // for the vertex 
        var get_values = this.AdjList.get(i); 
        var conc = ""; 
  
        // iterate over the adjacency list 
        // concatenate the values into a string 
        for (var j of get_values) 
            conc += j + " "; 
  
        // print the vertex and its adjacency list 
        console.log(i + " -> " + conc); 
        } 
    } 
}
export const test = new Graph();

export const getGraph = () => {
    return test
}

// console.log('yoyo')