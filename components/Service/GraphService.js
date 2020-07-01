import * as Dataservice from './DataService'
import { tap } from 'rxjs/operators';
import { date } from 'yup';


class GraphClass {
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

    populate(list){
        this.noOfVerticies = 10
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

const Graph = new GraphClass()
// const Markers$ = Dataservice.markers$.subscribe(data => console.log(data))
Markers$.unsubscribe()
export default Graph


// console.log('yoyo')