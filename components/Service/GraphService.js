class QElement { 
    constructor(element, priority) 
    { 
        this.element = element; 
        this.priority = priority; 
    } 
} 

class PriorityQueue { 
  
    constructor() 
    { 
        this.items = []; 
    }
    enqueue(element, priority){
        var qElement = new QElement(element, priority); 
        var contain = false;
        for (var i = 0; i < this.items.length; i++) { 
            if (this.items[i].priority > qElement.priority) { 
                this.items.splice(i, 0, qElement); 
                contain = true; 
                break; 
            } 
        }
        if (!contain) { 
            this.items.push(qElement); 
        }
    }

    dequeue(){ 
        if (this.isEmpty()) 
            return "Underflow"; 
        return this.items.shift(); 
    }

    front(){ 
        if (this.isEmpty()) 
            return "No elements in Queue"; 
        return this.items[0]; 
    } 

    rear(){ 
        if (this.isEmpty()) 
            return "No elements in Queue"; 
        return this.items[this.items.length - 1]; 
    } 

    isEmpty(){ 
        return this.items.length == 0; 
    } 
}


export class GraphClass {
    constructor(list) {
        this.noOfVerticies = list.length;
        this.AdjList = new Map()
        this.visited = []
        this.backtrace = {}
        this.dist = new Map()
        this.pq = new PriorityQueue()
        this.populate(list)
    } 

    addVerticies(node){
        this.AdjList.set(node,[]);
    }

    addEdge(src,dest,weight){
        this.AdjList.get(src).push({
            Name : dest,
            Cost: parseInt(weight)
        });

        this.AdjList.get(dest).push({
            Name : src,
            Cost: parseInt(weight)
        });
    }

    populate(list){
        let hr = new Date().getHours()
        for (let i=0; i< this.noOfVerticies; i++){
           this.addVerticies(list[i].name)
        };
        for (let i=0; i<this.noOfVerticies; i++){
            for (let x=0; x<list[i].neighbour.length; x++){
                if(hr >= 19 || hr <=8){
                    let modifiers = list[i].neighbour[x].modifiers
                    // console.log(list[i].neighbour[x].cost + list[i].neighbour[x].modifiers.night)
                    // let cost = list[i].neighbour[x].cost * (1+list[i].neighbour[x].modifiers.night)
                    let cost = list[i].neighbour[x].cost * (1+0.5+modifiers.night)
                    console.log("from :" + list[i].name+ "To:"+list[i].neighbour[x].name + " cost" +cost)
                    this.addEdge(list[i].name,list[i].neighbour[x].name,cost)
                } else {
                    this.addEdge(list[i].name,list[i].neighbour[x].name,list[i].neighbour[x].cost)
                }
                
            }

        }
    }

    dijkstra(start, end){
        let unvisited = this.setUnvisited()
        this.visited= []
    
        for (let i = 0; i < this.noOfVerticies; i++) {
             this.dist.set(unvisited[i], Infinity)
        }
        this.pq.enqueue(start,0)

        this.dist.set(start, 0)
        while(this.visited.length != this.noOfVerticies){
            let node = this.pq.dequeue()

            this.visited.push(node.element)

            this.neighbour(node.element)
        }

        
        let path = [end];
        let lastStep = end;
        while(lastStep !== start){
            path.unshift(this.backtrace[lastStep])
            lastStep = this.backtrace[lastStep]
        }
        // for (let i = 0; i< this.dist.length ; i++){
        //     console.log('s')
        // }
        return path

       
    }
    neighbour(node){
        let edgeDistance = -1;
        let newDistance = 1;
        for (let i=0; i< this.AdjList.get(node).length ; i++){
            let neighbour = this.AdjList.get(node)[i];

            if(!this.visited.includes(neighbour.Name)){
                edgeDistance = neighbour.Cost;
                newDistance = this.dist.get(node) + edgeDistance

                if (newDistance < this.dist.get(neighbour.Name)){
                    this.dist.set(neighbour.Name , newDistance);
                    this.backtrace[neighbour.Name] = node;
                    this.pq.enqueue(neighbour.Name, this.dist.get(neighbour.Name))
                }
                
            }
        }
    }
    

    setUnvisited(){
        let lst = []
        let adjIterative = this.AdjList.keys()
        for (let i=0 ; i<this.noOfVerticies;i++){
            lst.push(adjIterative.next().value)
        }
        return lst
    }
}


// const Markers$ = Dataservice.markers$.subscribe(data => console.log(data)) 
// Markers$.unsubscribe()



// console.log('yoyo')