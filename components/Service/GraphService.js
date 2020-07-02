import * as Dataservice from './DataService'
import { tap } from 'rxjs/operators';
import { date } from 'yup';


export class GraphClass {
    constructor(list) {
        this.noOfVerticies = list.length;
        this.AdjList = new Map()
        this.populate(list)

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
        for (let i=0; i< this.noOfVerticies; i++){
           this.addVerticies(list[i].name)
        };
        for (let i=0; i<this.noOfVerticies; i++){
            for (let x=0; x<list[i].neighbour.length; x++){
                this.addEdge(list[i].name,list[i].neighbour[x].name,list[i].neighbour[x].cost)
            }

        }
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

export const FindPath = (Graph , Start, End) => {

}
// const Markers$ = Dataservice.markers$.subscribe(data => console.log(data)) 
// Markers$.unsubscribe()



// console.log('yoyo')